package tests;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import model.User;
import control.JsonUnmarshaller;
import control.MySQLUtilities;
import control.PostitManagement;
import control.UserManagement;




/**
 * Private class to run some tests against the DB. 
 * TODO: Implement a few 'real' fleshed out tests.
 * @author Chris
 *
 */
public class test {
	
	public static void main (String[] args) throws Exception
	{
		
		//Position position = new Position();
    //	position.setId(1);
    //	position.setName("User");
    //	position.setPermissionLevel(1);
	//	int[] options = {1}; 
	//	UserManagement.updateUserByOption(1, "3", null,5);
	//	String print = UserManagement.getUserbyID(1).toString();
	//	System.out.println(print);
		
		User user = new User();
		user.setEmail("test@test.de");
		user.setPassword("student");
		user.setName("student");
		user.setSurname("test");
		user.setGender("test");

		user.setPosition(1);
		user.setPhone("123");
		user.setBirthDate(new Date());
		user.setFax("123");
		user.setLocation("Yoboi");
		user.setAvatar("Its yoboi");
		user.setRegisterDate(new Date());
		UserManagement.createUserFromUser(user);
		
		
		
		//PostitManagement.fetchAllPostitsSortedByDate();
		//UserManagement.getUserbyID(12).toString();
		//UserManagement.getUserbyID(13).toString();
		
		
		
		user = new User();
		user.setEmail("admin@admin.de");
		user.setPassword("admin");
		user.setName("admin");
		user.setSurname("test");
		user.setGender("test");

		user.setPosition(3);
		user.setPhone("123");
		user.setBirthDate(new Date());
		user.setFax("123");
		user.setLocation("Yoboi");
		user.setAvatar("Its yoboi");
		user.setRegisterDate(new Date());
		UserManagement.createUserFromUser(user);
		
		
		
		//PostitManagement.CreatePostit(5, "TEST", "HEUTEMALKURS", null , 5);
		//PostitManagement.FetchByResponseTo(5);
		//PostitManagement.fetchByAuthorOnlyPost(1);
		//MySQLUtilities.fillWithPostit();
	//	List<String> lines = Files.readAllLines(Paths.get("src/main/resources/MySQL_Setup.sql"));
	//	System.out.println(lines);
		//File json = new File("src/main/resources/example_user.json");
	//	File json_postit = new File("src/main/resources/example_postit.json");
	//	JsonUnmarshaller jc = new JsonUnmarshaller();
	//	jc.UnmarshalJsonPostit(json_postit);
	//	jc.UnmarshalJsonUser(json);
		//UserManagement.getUserbyMail("jimmie.duncan@example.com");
		
	//	PostitManagement.FetchAllPostits();
		//PostitManagement.FetchByAuthor(5);
		//new Date(),"23123123","Test","avatar",null);
 
    	//UserManagement.fetchAllUsers();
		
		//PostitManagement.deletePostitbyID(3);
	}

}
