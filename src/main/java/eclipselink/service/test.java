package eclipselink.service;

import java.util.Date;

import model.Position;
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
	
	public static void main (String[] args)
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
		PostitManagement.fetchByAuthorOnlyPost(1);
	//	PostitManagement.FetchAllPostits();
		//PostitManagement.FetchByAuthor(5);
		//new Date(),"23123123","Test","avatar",null);
    	
    	//UserManagement.fetchAllUsers();
	}

}
