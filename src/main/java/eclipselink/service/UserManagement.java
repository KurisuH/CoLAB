package eclipselink.service;
import java.util.UUID;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

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


		public static User FindUser (int id){
			   
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      User user = entitymanager.find( User.class, id);

		      System.out.println("User ID = " + user.getId());
		      System.out.println("User NAME = " + user.getName());
		      System.out.println("User surname = " + user.getSurname());
		      
		      return user;
		   }
		
	   public static void CreateUser(String email, String password, 
			   String avatar, String name, String surname,int position, String phone, 
			   Date birthDate, String gender, Date registerDate, String fax, String location, 
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
			   user.setPassword(password);
			   user.setPhone(phone);
			   user.setSurname(surname);
	    
			   entitymanager.persist( user );
			   entitymanager.getTransaction( ).commit( );

			   entitymanager.close( );
			   emfactory.close( );
		
			}
	   
	   public static void DeleteUser(int id)
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
	   
	   public static void UpdateUser(int id, String name, String surname)
	   {
		      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		      EntityManager entitymanager = emfactory.createEntityManager();
		      entitymanager.getTransaction().begin( );
		      
		      User User = entitymanager.find( User.class, id );

		      User.setName(name);
		      User.setSurname(surname);
		      
		      entitymanager.getTransaction( ).commit( );

	   }
	   
	   public static List<User> FetchAllUsers()
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
