package control;

import static java.lang.Math.toIntExact;
import java.util.List;
import java.util.UUID;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import org.eclipse.persistence.jpa.config.NamedQuery;

import model.Person;
import model.Position;
import model.Postit;
import model.User;

import java.util.*;

/**
 * This Class offers functionality for manipulating Data in the DB. 
 * This includes: Adding new User, Updating their Data, fetching a variety of
 * different lists according to ID.
 * 
 * @author Chris
 *
 */


public class UserManagement {
	
	static EntityManagerFactory emfactory = Persistence
			.createEntityManagerFactory("Eclipselink_JPA");

	public static User getUserbyID(int id) {


		
		EntityManager entitymanager = emfactory.createEntityManager();
		User user = entitymanager.find(User.class, id);

		System.out.println("User ID = " + user.getId());
		System.out.println("User NAME = " + user.getName());
		System.out.println("User surname = " + user.getSurname());
		user.setPostit_count(UserManagement.countPostitsByUser(user.getId()));

		entitymanager.close();
		return user;
	}
	
	public static User getUserbyMail(String id) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		User user = new User();
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.email = :id", User.class);
			query.setParameter("id", id);
			user = query.getSingleResult();
			

				
				System.out.println("User ID = " + user.getId());
				System.out.println("User NAME = " + user.getName());
				System.out.println("User surname = " + user.getSurname());
				
				
		} catch (Exception e) {
			System.out.println("Please specify n correct E-mail");
			e.printStackTrace();
		}
	
		user.setPostit_count(UserManagement.countPostitsByUser(user.getId()));
		entitymanager.close();
		return user;
	}
	
	public static boolean EmailExists(String id) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.email = :id", User.class);
			query.setParameter("id", id);
			List<User>result = query.getResultList();
			
			entitymanager.close();
			if (result.size() == 0){ return false;} 
			

		} catch (Exception e) {
			System.out.println("Please specify a correct E-mail");
			e.printStackTrace();
		}
		return true;
	


	}
	
	
	
	
	
	
	public static boolean canAccess(String id, String username) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		User result = new User();
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.email = :id", User.class);
			query.setParameter("id", id);
			result = query.getSingleResult();

		} catch (Exception e) {
			System.out.println("Please specify n correct E-mail");
			e.printStackTrace();
		}
	
		entitymanager.close();
		
		if(username.equals(result.getEmail())){return true;}
		

		return false;
	}
	
	public static boolean canAccessId(int id, int principal_id) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		User result = new User();
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.id = :id", User.class);
			query.setParameter("id", id);
			result = query.getSingleResult();

		} catch (Exception e) {
			System.out.println("Please specify a correct id");
			e.printStackTrace();
		}
	
		entitymanager.close();
		
		if(result.getId()==id){return true;}
		

		return false;
	}
	
	public static boolean isAdmin(String id, String username) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		User result = new User();
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.email = :id", User.class);
			query.setParameter("id", id);
			result = query.getSingleResult();

		} catch (Exception e) {
			System.out.println("Please specify n correct E-mail");
			e.printStackTrace();
		}
	
		entitymanager.close();
		
		if(result.getPosition()==3){return true;}
		

		return false;
	}
	
	public static boolean isModerator(String id, String username) {

		EntityManager entitymanager = emfactory.createEntityManager();
	
		User result = new User();
		try {

			entitymanager.getTransaction().begin();

			TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.email = :id", User.class);
			query.setParameter("id", id);
			result = query.getSingleResult();

		} catch (Exception e) {
			System.out.println("Please specify n correct E-mail");
			e.printStackTrace();
		}
	
		entitymanager.close();
		
		if(result.getPosition()==2){return true;}
		

		return false;
	}
	
	public static User getUserbyName(String id) {

		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n WHERE n.name = :id", User.class);
		query.setParameter("id", id);
		User result = query.getSingleResult();
		

			
			System.out.println("User ID = " + result.getId());
			System.out.println("User NAME = " + result.getName());
			System.out.println("User surname = " + result.getSurname());
	
			entitymanager.close();
		return result;
	}
	
	
	

	public static void createUser(String email, String password, String name,
			String surname, int position, String phone, Date birthDate,
			String gender, Date registerDate, String fax, String location,
			String avatar, List<Postit> postits) {

		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		User user = new User();

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

		entitymanager.persist(user);
		entitymanager.persist(position);
		entitymanager.getTransaction().commit();

		entitymanager.close();


	}

	/**
	 * Used for Parsing xml Data
	 * 
	 * @param person
	 *            the person Object created from a provided xml.
	 */
	public static void createUserFromPerson(Person person) {

		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		User user = new User();
		user.setEmail(person.getEmail());
		user.setPassword(person.getPassword());
		user.setName(person.getName());
		user.setSurname(person.getSurname());
		user.setGender(person.getGender());

		user.setPosition(3);
		user.setPhone(person.getPhone());
		user.setBirthDate(person.getDate());
		user.setFax(person.getFax());
		user.setLocation(person.getAddress());
		user.setAvatar(person.getPicturelarge());
		user.setRegisterDate(new Date());

		entitymanager.persist(user);
		// entitymanager.persist( position );
		entitymanager.getTransaction().commit();

		entitymanager.close();

	}
	
	
	public static void createUserFromUser(User user) {
		
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();
		user.setRegisterDate(new Date());


		entitymanager.persist(user);
		// entitymanager.persist( position );
		entitymanager.getTransaction().commit();

		entitymanager.close();

	}

	public static void deleteUser(int id) {
		
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		User User = entitymanager.find(User.class, id);
		entitymanager.remove(User);
		entitymanager.getTransaction().commit();
		entitymanager.close();

	}

	/**
	 * Function used for update Operations.
	 * 
	 * @param id
	 *            The ID of the user you want to update
	 * @param content
	 *            The content the data shall be changed to. 
	 * @param option
	 *            Specify the kind of Operations you want. 
	 *            
	 *            0. id (not recommended, only added for the sake of being complete and for
	 *            tests. The id is our pk and should never be changed) 
	 *            1. email
	 *            2. password 
	 *            3. name 
	 *            4. surname 
	 *            5. position 
	 *            6. phone 
	 *            7. birth_date 
	 *            8. gender 
	 *            9. register_date 
	 *            10. fax 
	 *            11. location 
	 *            12. avatar
	 * 
	 */
	public static void updateUserByOption(int id, String content, Date date,
			int options) {
		
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		User user = entitymanager.find(User.class, id);

		switch (options) {

		case 0:
			try {
				int newId = Integer.parseInt(content);
				user.setId(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 1:
			user.setEmail(content);
			break;
		case 2:
			user.setPassword(content);
			break;
		case 3:
			user.setName(content);
			break;
		case 4:
			user.setSurname(content);
			break;

		case 5:
			try {

				int newId = Integer.parseInt(content);
				user.setPosition(newId);
			}

			catch (NumberFormatException e) {
				System.out.println("Please specify a valid int for this input");
			}
			break;

		case 6:
			user.setBirthDate(date);
			break;
		case 7:
			user.setGender(content);
			break;
		case 8:
			user.setRegisterDate(date);
			break;
		case 9:
			user.setFax(content);
			break;
		case 10:
			user.setLocation(content);
			break;
		case 11:
			user.setAvatar(content);
			break;
		default:
			System.out
					.println("Please specify a Number in Range from 1 to 11, refer to the Javadoc for details.");
			break;
		}

		entitymanager.getTransaction().commit();
		entitymanager.close();

	}
	
	public static void updateUser(int id, User update) {
		
		EntityManager entitymanager = emfactory.createEntityManager();


		entitymanager.getTransaction().begin();

		User user = entitymanager.find(User.class, id);
		
		user.setEmail(update.getEmail());
		user.setPassword(update.getPassword());
		user.setName(update.getName());
		user.setSurname(update.getSurname());
		user.setGender(update.getGender());
		user.setPassword(update.getPassword());
		
		user.setPosition(update.getPosition());
		user.setPhone(update.getPhone());
		user.setBirthDate(update.getBirthDate());
		user.setFax(update.getFax());
		user.setLocation(update.getLocation());
		user.setAvatar(update.getAvatar());
		user.setRegisterDate(new Date());


		entitymanager.getTransaction().commit();

		entitymanager.close();

	}


	public static List<User> fetchAllUsers() {
		
		EntityManager entitymanager = emfactory.createEntityManager();

		entitymanager.getTransaction().begin();

		TypedQuery<User> query = entitymanager.createQuery("SELECT n FROM User n", User.class);
		List<User> result = query.getResultList();

		for (User n : result) {
			
			n.setPostit_count(UserManagement.countPostitsByUser(n.getId()));
			System.out.println("User ID = " + n.getId());
			System.out.println("User NAME = " + n.getName());
			System.out.println("User surname = " + n.getSurname());

		}

		
		entitymanager.close();
		return result;

	}
	
	public static int countPostitsByUser(int id)
	{
	
		EntityManager em = emfactory.createEntityManager();

	
		TypedQuery<Long> query = em.createQuery(
				"SELECT COUNT(n) FROM Postit n WHERE n.author = :id",
				Long.class);
		query.setParameter("id", id);
		Long result_long = query.getSingleResult().longValue();
		
		int result_int =  toIntExact(result_long);

		return result_int;
		/*
		TypedQuery<Postit> query = entitymanager.createQuery(
				"SELECT n FROM Postit n WHERE n.author = :id AND n.isPost = 0",
				Postit.class);
		*/
		
                
	}
	
	
	
	

}
