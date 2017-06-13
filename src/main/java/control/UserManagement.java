package control;
import java.util.UUID;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import model.Person;
import model.Position;
import model.Postit;
import model.User;

import java.util.*;


/**
 * This class implements methods to work with the User Data Model. 
 * This includes Creation/Lookup/Updating and several other.
 * @author Chris
 *
 */
public class UserManagement {

		
		public static User getUserbyID (int id){
			   
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      User user = entitymanager.find( User.class, id);

		      System.out.println("User ID = " + user.getId());
		      System.out.println("User NAME = " + user.getName());
		      System.out.println("User surname = " + user.getSurname());
		      
		      return user;
		   }
		
	   public static void createUser(String email, String password,String name, String surname,int position, String phone, 
			   Date birthDate, String gender, Date registerDate, String fax, String location,  
			   String avatar, 
			   List<Postit> postits)
	   {
		
			   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
			   EntityManager entitymanager = emfactory.createEntityManager( );
			   entitymanager.getTransaction( ).begin( );

			   User user = new User( ); 
			   
			   user.setAvatar(avatar);
			   user.setBirthDate(birthDate);   
			   user.setEmail(email);
			   user.setFax(fax);
			   user.setGender(gender);
			   user.setLocation(location); 	   
			   user.setName(name);
			   user.setRegisterDate(registerDate);
			   user.setPassword(password);
			   user.setPhone(phone);
			   user.setPosition(position);
			   user.setSurname(surname);
			   user.setPostits(postits);
	    
			   entitymanager.persist( user );
			   entitymanager.persist( position );
			   entitymanager.getTransaction( ).commit( );

			   entitymanager.close( );
			   emfactory.close( );
		
			}
	   
	   /**
	    * Used for Parsing xml Data
	    * @param person the person Object created from a provided xml.
	    */
	   public static void createUserFromPerson (Person person)
	   {   
	
		   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
		   EntityManager entitymanager = emfactory.createEntityManager( );
		   entitymanager.getTransaction( ).begin( );

	    	User user = new User();
	    	user.setEmail(person.getEmail());
	    	user.setPassword(person.getPassword());
	    	user.setName(person.getName());
	    	user.setSurname(person.getSurname());
	    	user.setGender(person.getGender());
	    	
	    	
    	
	    	user.setPosition(1);
	    	user.setPhone(person.getPhone());
	    	user.setBirthDate(person.getDate());
	    	user.setFax(person.getFax());
	    	user.setLocation(person.getAddress());
	    	user.setAvatar(person.getPicturelarge());
	    	user.setRegisterDate(new Date());
	    
			 entitymanager.persist( user );
			 //entitymanager.persist( position );
			 entitymanager.getTransaction( ).commit( );

			 entitymanager.close( );
			 emfactory.close( );
	   }
	   
	   
	   public static void deleteUser(int id)
	   {
		   
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      entitymanager.getTransaction().begin();
		      
		      User User = entitymanager.find( User.class, id );
		      entitymanager.remove( User );
		      entitymanager.getTransaction().commit();
		      entitymanager.close();
		      emfactory.close();
	   }
	   
	   /**
	    * Function used for update Operations. 
	    * @param id The ID of the user you want to update
	    * @param content The content the data shall be changed to.
	    * @param option Specify the kind of Operations you want. 
	    * 0. id (not recommended, only added for the sake of being complete and for tests. The id is our pk and should never be changed)
	    * 1. email 
	    * 2. password
	    * 3. name
	    * 4. surname
	    * 5. position
	    * 6. phone
	    * 7. birth_date
	    * 8. gender
	    * 9. register_date
	    * 10. fax
	    * 11. location
	    * 12. avatar
	    * 
	    */
	   public static void updateUserByOption(int id, String content, Date date, int options)
	   {
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      entitymanager.getTransaction().begin( );
		      
		      User user = entitymanager.find( User.class, id );
		      


		        switch (options) {
		        
		        
		        	case 0:  try{
		        		     int newId =  Integer.parseInt(content);
		        			 user.setId(newId);
		        			 }
		        	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		        			 break;    
		        			 
		        	case 1:  user.setEmail(content);
		                     break;
		            case 2:  user.setPassword(content);
		                     break;
		            case 3:  user.setName(content);
		                     break;
		            case 4:  user.setSurname(content);
		                     break;
		                     
		            case 5:  	            		
		            		try{          			

		            		int newId =  Integer.parseInt(content);
		            		user.setPosition(newId);
		            		}
       	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		                     break;
		                     
		            case 6:  user.setBirthDate(date);
		                     break;
		            case 7:  user.setGender(content);
		                     break;
		            case 8:  user.setRegisterDate(date);
		                     break;
		            case 9:  user.setFax(content);
		                     break;
		            case 10: user.setLocation(content);
		                     break;
		            case 11: user.setAvatar(content);
		                     break;
		            default: System.out.println("Please specify a Number in Range from 1 to 11, refer to the Javadoc for details.");
		                     break;
		        }
		        

		      
		      entitymanager.getTransaction( ).commit( );
		      
		      

	   }
	   
	   
	   public static void updateUserByOptionBulk(int id, String[] content, Date date, int[] options)
	   {
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      entitymanager.getTransaction().begin( );
		      
		      User user = entitymanager.find( User.class, id );
		      
		      for (int i : options){

		        switch (i) {
		        
		        
		        	case 0:  try{
		        		     int newId =  Integer.parseInt(content[i]);
		        			 user.setId(newId);
		        			 }
		        	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		        			 break;    
		        			 
		        	case 1:  user.setEmail(content[i]);
		                     break;
		            case 2:  user.setPassword(content[i]);
		                     break;
		            case 3:  user.setName(content[i]);
		                     break;
		            case 4:  user.setSurname(content[i]);
		                     break;
		                     
		            case 5:  	            		
		            		try{          			
		            		Position p = new Position();
		            		int newId =  Integer.parseInt(content[i]);
		            		user.setPosition(newId);

		        			}
       	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		                     break;
		                     
		            case 6:  user.setBirthDate(date);
		                     break;
		            case 7:  user.setGender(content[i]);
		                     break;
		            case 8:  user.setRegisterDate(date);
		                     break;
		            case 9:  user.setFax(content[i]);
		                     break;
		            case 10: user.setLocation(content[i]);
		                     break;
		            case 11: user.setAvatar(content[i]);
		                     break;
		            default: System.out.println("Please specify a Number in Range from 1 to 11, refer to the Javadoc for details.");
		                     break;
		        }
		        }
	  


		      entitymanager.getTransaction( ).commit( );
	   }
		      
		      
	   
	   public static List<User> fetchAllUsers()
	   {
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      entitymanager.getTransaction().begin( );
	      
		      TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n", User.class);
		      List<User> result = query.getResultList();
		      
		      for(User n : result)
		      {
			      System.out.println("User ID = " + n.getId());
			      System.out.println("User NAME = " + n.getName());
			      System.out.println("User surname = " + n.getSurname());
			      
		      }
		      
		      return result;


		   
	   }
	   


	}
