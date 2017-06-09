package eclipselink.service;

import java.util.Date;

import model.Position;
import control.MySQLUtilities;
import control.UserManagement;



public class test {
	
	public static void main (String[] args)
	{
		
		Position position = new Position();
    	position.setId(1);
    	position.setName("User");
    	position.setPermissionLevel(1);
		//UserManagement.createUser("Testest","TEST","MREST","SURTE",position,"12334342",new Date(),"m"
		//	,new Date(),"23123123","Test","avatar",null);
    	
    	UserManagement.fetchAllUsers();
	}

}
