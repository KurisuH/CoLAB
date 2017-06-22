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

/**
 * This Class offers functionality for manipulating Data in the DB. This
 * includes: Adding new Postits, Updating their Data, fetching a variety of
 * different lists according to ID/User or response.
 * 
 * @author Chris
 *
 */

public class PostitManagement {

	public static Postit getPostitbyID(int id) {

		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		Postit postit = entitymanager.find(Postit.class, id);

		System.out.println("Postit ID = " + postit.getId());
		System.out.println("Postit CONTENT = " + postit.getContentText());
		System.out.println("Postit AUTHOR = " + postit.getAuthor());

		return postit;
	}

	public static void createPostit(int author, String title,
			String content_text, String content_image, int responseTo) {

		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = new Postit();

		postit.setAuthor(author);
		postit.setTitle(title);
		postit.setContentText(content_text);
		postit.setContentImage(content_image);
		postit.setResponseTo(responseTo);
		postit.setDate(new Date());

		entitymanager.persist(postit);
		entitymanager.getTransaction().commit();

		entitymanager.close();
		emfactory.close();

	}

	public static void deletePostitbyID(int id) {

		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = entitymanager.find(Postit.class, id);
		entitymanager.remove(postit);
		entitymanager.getTransaction().commit();
		entitymanager.close();
		emfactory.close();
	}

	public static void updatePostitbyOption(int id, String content,
			int options, Date date, Timestamp timestamp) {
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = entitymanager.find(Postit.class, id);

		switch (options) {

		case 0:
			try {
				int newId = Integer.parseInt(content);
				postit.setId(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 1:
			try {
				int newId = Integer.parseInt(content);
				postit.setAuthor(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 2:
			postit.setTitle(content);
			break;
		case 3:
			postit.setContentText(content);
			break;
		case 4:
			postit.setContentImage(content);
			break;

		case 5:
			try {
				int newId = Integer.parseInt(content);
				postit.setClicks(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 6:
			try {
				int newId = Integer.parseInt(content);
				postit.setAnswers(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 7:
			try {

				int newId = Integer.parseInt(content);
				if (newId == 0 || newId == 1) {
					postit.setIsPost(Byte.parseByte(content));
				} else {
					System.out
							.println("Please specify a value between 1 and 0 for the column 'isPost'");
				}
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 8:
			postit.setDate(date);
			break;

		case 9:
			postit.setLastModified(timestamp);
			break;
		default:
			System.out
					.println("Please specify a Number in Range from 1 to 9, refer to the Javadoc for details.");
			break;
		}

		entitymanager.getTransaction().commit();

	}

	public static void updatePostitbyOptionBulk(int id, String[] content,
			int[] options, Date date, Timestamp timestamp) {
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
		EntityManager entitymanager = emfactory.createEntityManager();
		entitymanager.getTransaction().begin();

		Postit postit = entitymanager.find(Postit.class, id);

		for (int i : options) {

			switch (i) {

			case 0:
				try {
					int newId = Integer.parseInt(content[i]);
					postit.setId(newId);
				}

				catch (NumberFormatException e) {
					System.out
							.println("Please specify a valid int for this input");
				}
				break;

			case 1:
				try {
					int newId = Integer.parseInt(content[i]);
					postit.setAuthor(newId);
				}

				catch (NumberFormatException e) {
					System.out
							.println("Please specify a valid int for this input");
				}
				break;

			case 2:
				postit.setTitle(content[i]);
				break;
			case 3:
				postit.setContentText(content[i]);
				break;
			case 4:
				postit.setContentImage(content[i]);
				break;

			case 5:
				try {
					int newId = Integer.parseInt(content[i]);
					postit.setClicks(newId);
				}

				catch (NumberFormatException e) {
					System.out
							.println("Please specify a valid int for this input");
				}
				break;

			case 6:
				try {
					int newId = Integer.parseInt(content[i]);
					postit.setAnswers(newId);
				}

				catch (NumberFormatException e) {
					System.out
							.println("Please specify a valid int for this input");
				}
				break;

			case 7:
				try {

					int newId = Integer.parseInt(content[i]);
					if (newId == 0 || newId == 1) {
						postit.setIsPost(Byte.parseByte(content[i]));
					} else {
						System.out
								.println("Please specify a value between 1 and 0 for the column 'isPost'");
					}
				}

				catch (NumberFormatException e) {
					System.out
							.println("Please specify a valid int for this input");
				}
				break;

			case 8:
				postit.setDate(date);
				break;

			case 9:
				postit.setLastModified(timestamp);
				break;
			default:
				System.out
						.println("Please specify a Number in Range from 1 to 9, refer to the Javadoc for details.");
				break;
			}

		}

		entitymanager.getTransaction().commit();

	}

	public static List<Postit> fetchAllPostits() {
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
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

		return result;
	}

	public static List<Postit> fetchByResponseTo(int id)

	{
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
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

		return result;
	}

	public static List<Postit> fetchByAuthor(int id)

	{
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
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

		return result;
	}

	public static List<Postit> fetchByAuthorOnlyPost(int id)

	{
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
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

		return result;
	}

	public static List<Postit> fetchByAuthorOnlyNotPost(int id)

	{
		EntityManagerFactory emfactory = Persistence
				.createEntityManagerFactory("Eclipselink_JPA");
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

		return result;
	}

}
