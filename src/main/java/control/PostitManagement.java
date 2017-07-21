package control;


import java.security.Timestamp;
import java.util.*;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import model.Postit;
import model.User;

/**
 * This Class offers functionality for manipulating Data in the DB. This
 * includes: Adding new Postits, Updating their Data, fetching a variety of
 * different lists according to ID/User or response.
 * 
 * @author Chris
 *
 */



public class PostitManagement {
	
	
	static EntityManagerFactory emfactory = Persistence
			.createEntityManagerFactory("Eclipselink_JPA");

	public static Postit getPostitbyID(int id) {


		EntityManager entitymanager = emfactory.createEntityManager();
		Postit postit = entitymanager.find(Postit.class, id);

		System.out.println("Postit ID = " + postit.getId());
		System.out.println("Postit CONTENT = " + postit.getContentText());
		System.out.println("Postit AUTHOR = " + postit.getAuthor());

		entitymanager.close();
		return postit;
		
	}
	
	
	public static Postit incrementById(int id) {


		EntityManager entitymanager = emfactory.createEntityManager();
		Postit postit = entitymanager.find(Postit.class, id);
		entitymanager.getTransaction().begin();

		postit.setClicks(postit.getClicks()+1);

		entitymanager.persist(postit);
		entitymanager.getTransaction().commit();

		entitymanager.close();
		
		return postit;
		
	}
	

	@GeneratedValue 
	public static int createPostit(int author, String title,
			String content_text, String content_image, int responseTo) {
		
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = new Postit();

		postit.setAuthor(author);
		postit.setTitle(title);
		postit.setContentText(content_text);
		postit.setContentImage(content_image);
		postit.setResponseTo(responseTo);
		if(postit.getResponseTo() <= 0 ){postit.setIsPost(1);} else {postit.setIsPost(0);}
		

		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MILLISECOND, 0);
		Date date = cal.getTime();
		postit.setDate(date);
		

		entitymanager.persist(postit);
		
		entitymanager.flush();
		
		
		entitymanager.getTransaction().commit();
		
	
		
		int result = postit.getId();

		
		entitymanager.close();

		
		

		return result;

		


	}
	
	//TODO find elegant way to get the id of a newly persisted postit
	@GeneratedValue 
	public static int createPostitFromPostit(Postit postit) {
		


		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();
		
		if(postit.getResponseTo() <= 0 ){postit.setIsPost(0);} else {postit.setIsPost(1);}
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.MILLISECOND, 0);
		Date date = cal.getTime();
		postit.setDate(date);

		entitymanager.persist(postit);
		entitymanager.flush();
		entitymanager.getTransaction().commit();
	

		entitymanager.close();

		

		
		

		return postit.getId();

	}
	
	
	
	
	public static void updatePostit(int id, Postit update) {


		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = entitymanager.find(Postit.class, id);
		
		//postit.setAuthor(update.getAuthor());
		postit.setTitle(update.getTitle());
		postit.setContentText(update.getContentText());
		postit.setContentImage(update.getContentImage());
				
		//postit.setResponseTo(update.getResponseTo());
		//if(postit.getResponseTo() <= 0 ){postit.setIsPost(0);} else {postit.setIsPost(1);}

		entitymanager.getTransaction().commit();

		entitymanager.close();

	}
	
	
	
	

	public static void deletePostitbyID(int id) {


		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = entitymanager.find(Postit.class, id);
		entitymanager.remove(postit);
		entitymanager.getTransaction().commit();
		entitymanager.close();

	}
	
	
	public static List<Postit> fetchAllPostits() {
		
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n", Postit.class);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}
		entitymanager.close();

		return result;
	}
	
	public static List<Postit> fetchAllPostitsSortedByDate() {
		
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n ORDER BY n.date", Postit.class);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}

		entitymanager.close();
		return result;
	}
	
	public static List<Postit> fetchAllPostitsSortedByClicks() {
		
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n ORDER BY n.clicks", Postit.class);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}

		entitymanager.close();
		return result;
	}
	
	
	

	public static List<Postit> fetchByResponseTo(int id)

	{
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager
				.createQuery("SELECT n FROM Postit n WHERE n.responseTo = :id",
						Postit.class);
		query.setParameter("id", id);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}

		entitymanager.close();
		return result;
	}
	
	//TODO find elegant way to get the id of a newly persisted postit
	public static Postit getLastPostit(int author, String title,Date date)

	{
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		/*
		TypedQuery<Postit> query = entitymanager
				.createQuery("SELECT n FROM Postit n WHERE n.responseTo = :id and WHERE n.author = :author and WHERE n.date = :date AND n.title AND WHERE n.content_text := content_text AND WHERE n.content_image",
						Postit.class);
		 *///"SELECT n FROM Postit n WHERE n.responseTo = :id",
		//TypedQuery<Postit> query = entitymanager
			//	.createQuery("SELECT n FROM Postit n WHERE n.author = :author and WHERE n.date = :date",
			//			Postit.class);
		
		
		Query query = entitymanager.createNativeQuery("SELECT * from postit where author = ? and title = ? and date = ?", Postit.class);
		query.setParameter(1, author);
		query.setParameter(2, title);
		query.setParameter(3, date);
		
		Postit result = (Postit) query.getSingleResult();
		
		
		//((javax.persistence.Query) query).setParameter(2, "Smith");
	/*	query.setParameter("content_text",content_text);
		query.setParameter("content_image", content_image);
		query.setParameter("date", date);
		*/
		


			System.out.println("Postit ID = " + result.getId());
			System.out.println("Postit Author = " + result.getAuthor());
			System.out.println("Postit CONTENT = " + result.getContentText());



		entitymanager.close();
		return result;
	}

	public static List<Postit> fetchByAuthor(int id)

	{
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n WHERE n.author = :id", Postit.class);
		query.setParameter("id", id);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}

		entitymanager.close();
		return result;
	}
	
	
	

	public static List<Postit> fetchByAuthorOnlyPost(int id)

	{
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n WHERE n.author = :id AND n.isPost = 1",
				Postit.class);
		query.setParameter("id", id);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}
		entitymanager.close();

		return result;
	}

	public static List<Postit> fetchByAuthorOnlyNotPost(int id)

	{
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n WHERE n.author = :id AND n.isPost = 0",
				Postit.class);
		query.setParameter("id", id);
		List<Postit> result = query.getResultList();

		for (Postit n : result) {
			System.out.println("Postit ID = " + n.getId());
			System.out.println("Postit Author = " + n.getAuthor());
			System.out.println("Postit CONTENT = " + n.getContentText());

		}
		entitymanager.close();

		return result;
	}

}
