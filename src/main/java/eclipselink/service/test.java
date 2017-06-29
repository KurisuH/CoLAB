package eclipselink.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import control.JsonUnmarshaller;
import control.MySQLUtilities;
import control.PostitManagement;




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
		//UserManagement.createUser("Testest","TEST","MREST","SURTE",position,"12334342",new Date(),"m"
		
		//PostitManagement.CreatePostit(5, "TEST", "HEUTEMALKURS", null , 5);
		//PostitManagement.FetchByResponseTo(5);
		//PostitManagement.fetchByAuthorOnlyPost(1);
		MySQLUtilities.fillWithPostit();
	//	List<String> lines = Files.readAllLines(Paths.get("src/main/resources/MySQL_Setup.sql"));
	//	System.out.println(lines);
		//File json = new File("src/main/resources/example_user.json");
	//	File json_postit = new File("src/main/resources/example_postit.json");
	//	JsonUnmarshaller jc = new JsonUnmarshaller();
	//	jc.UnmarshalJsonPostit(json_postit);
	//	jc.UnmarshalJsonUser(json);
		
	//	PostitManagement.FetchAllPostits();
		//PostitManagement.FetchByAuthor(5);
		//new Date(),"23123123","Test","avatar",null);
    	
    	//UserManagement.fetchAllUsers();
		
		//PostitManagement.deletePostitbyID(3);
	}

}
