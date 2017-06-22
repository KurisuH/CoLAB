package control;

import java.util.*;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import model.Position;

/**
 * This Class offers functionality for manipulating Data in the DB.
 * This includes: Adding new Positions, Updating their Data, or fetching a list of all Positions.
 * @author Chris
 *
 */

public class PositionManagement {
	
	public static Position findPosition (int id){
		   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      Position position = entitymanager.find( Position.class, id);

	      System.out.println("Position ID = " + position.getId());
	      System.out.println("Position NAME = " + position.getName());
	      System.out.println("Position PERMISSIONLVL = " + position.getPermissionLevel());
	      
	      return position;
	   }
	
   public static void createPosition(String Name, int PermissionLevel){
	
		   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
		   EntityManager entitymanager = emfactory.createEntityManager( );
		   entitymanager.getTransaction( ).begin( );

		   Position position = new Position( ); 
    
    
		   position.setName(Name);
		   position.setPermissionLevel( PermissionLevel);
    
		   entitymanager.persist( position );
		   entitymanager.getTransaction( ).commit( );

		   entitymanager.close( );
		   emfactory.close( );
	
		}
   
   public static void createPositionFromPosition(Position pos){
		
	   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
	   EntityManager entitymanager = emfactory.createEntityManager( );
	   entitymanager.getTransaction( ).begin( );

	   entitymanager.persist( pos );
	   entitymanager.getTransaction( ).commit( );

	   entitymanager.close( );
	   emfactory.close( );

	}
   
   public static void deletePosition(int id)
   {
	   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin();
	      
	      Position position = entitymanager.find( Position.class, id );
	      entitymanager.remove( position );
	      entitymanager.getTransaction().commit();
	      entitymanager.close();
	      emfactory.close();
   }
   
   public static void updatePosition(int id, String name, int permssionlevel)
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      Position position = entitymanager.find( Position.class, id );

	      position.setName(name);
	      position.setPermissionLevel(permssionlevel);
	      
	      entitymanager.getTransaction( ).commit( );

   }
   
   public static List<Position> fetchAllPositions()
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
   
	      TypedQuery<Position> query = entitymanager.createQuery("SELECT n FROM Position n", Position.class);
	      List<Position> result = query.getResultList();
	      
	      for(Position n : result)
	      {
		      System.out.println("Position ID = " + n.getId());
		      System.out.println("Position NAME = " + n.getName());
		      System.out.println("Position CONTENT = " + n.getPermissionLevel());
		      
	      }
	      
	      return result;
   }
   

}

