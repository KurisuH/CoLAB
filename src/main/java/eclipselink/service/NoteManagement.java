package eclipselink.service;
import entities.Note;
import java.util.*;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import entities.Note;


public class NoteManagement {
	
	public static Note FindNote (int id){
		   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      Note note = entitymanager.find( Note.class, id);

	      System.out.println("Note ID = " + note.getId());
	      System.out.println("Note NAME = " + note.getName());
	      System.out.println("Note CONTENT = " + note.getContent());
	      
	      return note;
	   }
	
   public static void CreateNote(String Name, String Content){
	
		   EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );   
		   EntityManager entitymanager = emfactory.createEntityManager( );
		   entitymanager.getTransaction( ).begin( );

		   Note note = new Note( ); 
    
    
		   note.setName( Name);
		   note.setContent( Content);
    
		   entitymanager.persist( note );
		   entitymanager.getTransaction( ).commit( );

		   entitymanager.close( );
		   emfactory.close( );
	
		}
   
   public static void DeleteNote(int id)
   {
	   
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin();
	      
	      Note note = entitymanager.find( Note.class, id );
	      entitymanager.remove( note );
	      entitymanager.getTransaction().commit();
	      entitymanager.close();
	      emfactory.close();
   }
   
   public static void UpdateNote(int id, String name, String content)
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      Note note = entitymanager.find( Note.class, id );

	      note.setName(name);
	      note.setContent(content);
	      
	      entitymanager.getTransaction( ).commit( );

   }
   
   public static List<Note> FetchAllNotes()
   {
	      EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
	      EntityManager entitymanager = emfactory.createEntityManager();
	      entitymanager.getTransaction().begin( );
	      
	      

	      
	      TypedQuery<Note> query = entitymanager.createQuery("SELECT n FROM Note n", Note.class);
	      List<Note> result = query.getResultList();
	      
	      for(Note n : result)
	      {
		      System.out.println("Note ID = " + n.getId());
		      System.out.println("Note NAME = " + n.getName());
		      System.out.println("Note CONTENT = " + n.getContent());
		      
	      }
	      
	      return result;


	   
   }
   

   
   

}
