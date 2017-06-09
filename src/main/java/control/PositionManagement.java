package control;

import java.util.*;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import model.Position;


public class PositionManagement {
	
	public static Position FindPosition (int id){
		   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      Position note = entitymanager.find( Position.class, id);

	      System.out.println("Position ID = " + note.getId());
	      System.out.println("Position NAME = " + note.getName());
	      System.out.println("Position PERMISSIONLVL = " + note.getPermissionLevel());
	      
	      return note;
	   }
	
   public static void CreatePosition(String Name, int PermissionLevel){
	
		   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
		   EntityManager entitymanager = emfactory.createEntityManager( );
		   entitymanager.getTransaction( ).begin( );

		   Position note = new Position( ); 
    
    
		   note.setName( Name);
		   note.setPermissionLevel( PermissionLevel);
    
		   entitymanager.persist( note );
		   entitymanager.getTransaction( ).commit( );

		   entitymanager.close( );
		   emfactory.close( );
	
		}
   
   public static void CreatePositionFromPosition(Position pos){
		
	   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
	   EntityManager entitymanager = emfactory.createEntityManager( );
	   entitymanager.getTransaction( ).begin( );

	   entitymanager.persist( pos );
	   entitymanager.getTransaction( ).commit( );

	   entitymanager.close( );
	   emfactory.close( );

	}
   
   public static void DeletePosition(int id)
   {
	   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin();
	      
	      Position note = entitymanager.find( Position.class, id );
	      entitymanager.remove( note );
	      entitymanager.getTransaction().commit();
	      entitymanager.close();
	      emfactory.close();
   }
   
   public static void UpdatePosition(int id, String name, int permssionlevel)
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      Position note = entitymanager.find( Position.class, id );

	      note.setName(name);
	      note.setPermissionLevel(permssionlevel);
	      
	      entitymanager.getTransaction( ).commit( );

   }
   
   public static List<Position> FetchAllPositions()
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

