package control;


import java.sql.Timestamp;
import java.util.*;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import model.Postit;
import model.User;


public class PostitManagement {
	
	public static Postit FindPostit (int id){
		   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      Postit postit = entitymanager.find( Postit.class, id);

	      System.out.println("Postit ID = " + postit.getId());
	      System.out.println("Postit CONTENT = " + postit.getContentText());
	      System.out.println("Postit AUTHOR = " + postit.getAuthor());
	      
	      return postit;
	   }

   public static void CreatePostit(int author, String title, String content_text, String content_image, int responseTo){
	
		   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
		   EntityManager entitymanager = emfactory.createEntityManager( );
		   entitymanager.getTransaction( ).begin( );

		   Postit postit = new Postit( ); 
    
    
		   postit.setAuthor(author);
		   postit.setTitle(title);
		   postit.setContentText(content_text);
		   postit.setContentImage(content_image);
		   postit.setResponseTo(responseTo);
		   postit.setDate(new Date());

		   
		   
  
		   entitymanager.persist( postit );
		   entitymanager.getTransaction( ).commit( );

		   entitymanager.close( );
		   emfactory.close( );
	
		}
   
   
   public static void DeletePostitbyID(int id)
   {
	   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin();
	      
	      Postit postit = entitymanager.find( Postit.class, id );
	      entitymanager.remove( postit );
	      entitymanager.getTransaction().commit();
	      entitymanager.close();
	      emfactory.close();
   }
   
   public static void UpdatePostitbyOption(int id, String content, int options, Date date, Timestamp timestamp)
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      Postit postit = entitymanager.find( Postit.class, id );
	            


			        switch (options) {
			        
			        
			        	case 0:  try{
			        		     int newId =  Integer.parseInt(content);
			        			 postit.setId(newId);
			        			 }
			        	
			        			catch(NumberFormatException e)
			        			{
			        				System.out.println("Please specify a valid int for this input");
			        			}
			        			 break;    
			        			 
			        	case 1:   try{
			        			int newId =  Integer.parseInt(content);
			        			postit.setAuthor(newId);
		        			 	}
		        	
			        			catch(NumberFormatException e)
		        				{
		        				System.out.println("Please specify a valid int for this input");
		        				}
			        			break; 
		        			 
			            case 2:  postit.setTitle(content);
			                     break;
			            case 3:  postit.setContentText(content);
			                     break;
			            case 4:  postit.setContentImage(content);
			                     break;
			                    
			                     
			            case 5:  try{
		        		     int newId =  Integer.parseInt(content);
		        			 postit.setClicks(newId);
		        			 }
		        	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		        			 break; 
			                     
			            case 6: try{
			            		int newId =  Integer.parseInt(content);
		        		     	postit.setAnswers(newId);
			            		}
		        	
			            		catch(NumberFormatException e)
			            		{
		        				System.out.println("Please specify a valid int for this input");
			            		}
		        			 break;   

			            case 7: try{
			            	
			            	
		        		     int newId =  Integer.parseInt(content);
		        		     if (newId == 0 || newId == 1)
		        		     {
		        		     postit.setIsPost(Byte.parseByte(content));
		        		     }
		        		     else { System.out.println("Please specify a value between 1 and 0 for the column 'isPost'");
		        			 }
			            	 }
		        	
		        			 catch(NumberFormatException e)
		        			 {
		        				System.out.println("Please specify a valid int for this input");
		        			 }
		        			 break; 
		        			 
			            case 8:  postit.setDate(date);
			            		 break; 
	        			 	
			            case 9: postit.setLastModified(timestamp);
			            		break;
			            default: System.out.println("Please specify a Number in Range from 1 to 9, refer to the Javadoc for details.");
			                     break;
			        }
   			
			        

			      
			      entitymanager.getTransaction( ).commit( );
	  
  	      
   				}
   
   public static void UpdatePostitbyOptionBulk(int id, String[] content, int[] options, Date date, Timestamp timestamp)
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      Postit postit = entitymanager.find( Postit.class, id );
	            

	      for(int i : options){
	    	  
	      
			        switch (i) {
			        
			        
			        	case 0:  try{
			        		     int newId =  Integer.parseInt(content[i]);
			        			 postit.setId(newId);
			        			 }
			        	
			        			catch(NumberFormatException e)
			        			{
			        				System.out.println("Please specify a valid int for this input");
			        			}
			        			 break;    
			        			 
			        	case 1:   try{
			        			int newId =  Integer.parseInt(content[i]);
			        			postit.setAuthor(newId);
		        			 	}
		        	
			        			catch(NumberFormatException e)
		        				{
		        				System.out.println("Please specify a valid int for this input");
		        				}
			        			break; 
		        			 
			            case 2:  postit.setTitle(content[i]);
			                     break;
			            case 3:  postit.setContentText(content[i]);
			                     break;
			            case 4:  postit.setContentImage(content[i]);
			                     break;
			                    
			                     
			            case 5:  try{
		        		     int newId =  Integer.parseInt(content[i]);
		        			 postit.setClicks(newId);
		        			 }
		        	
		        			catch(NumberFormatException e)
		        			{
		        				System.out.println("Please specify a valid int for this input");
		        			}
		        			 break; 
			                     
			            case 6: try{
			            		int newId =  Integer.parseInt(content[i]);
		        		     	postit.setAnswers(newId);
			            		}
		        	
			            		catch(NumberFormatException e)
			            		{
		        				System.out.println("Please specify a valid int for this input");
			            		}
		        			 break;   

			            case 7: try{
			            	
			            	
		        		     int newId =  Integer.parseInt(content[i]);
		        		     if (newId == 0 || newId == 1)
		        		     {
		        		     postit.setIsPost(Byte.parseByte(content[i]));
		        		     }
		        		     else { System.out.println("Please specify a value between 1 and 0 for the column 'isPost'");
		        			 }
			            	 }
		        	
		        			 catch(NumberFormatException e)
		        			 {
		        				System.out.println("Please specify a valid int for this input");
		        			 }
		        			 break; 
		        			 
			            case 8:  postit.setDate(date);
			            		 break; 
	        			 	
			            case 9: postit.setLastModified(timestamp);
			            		break;
			            default: System.out.println("Please specify a Number in Range from 1 to 9, refer to the Javadoc for details.");
			                     break;
			        }
   			
			        
	      }

			      
			      entitymanager.getTransaction( ).commit( );
	  
  	      
   				}
   
   
   public static List<Postit> FetchAllPostits()
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
   
	      TypedQuery<Postit> query = entitymanager.createQuery("SELECT n FROM Postit n", Postit.class);
	      List<Postit> result = query.getResultList();
	      
	      for(Postit n : result)
	      {
		      System.out.println("Postit ID = " + n.getId());
		      System.out.println("Postit Author = " + n.getAuthor());
		      System.out.println("Postit CONTENT = " + n.getContentText());
		      
	      }
	      
	      return result;
   }
   

}

