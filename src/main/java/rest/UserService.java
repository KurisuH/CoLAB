//TO DO Update functionality as needed, use implementation as reference

package rest;

import java.io.File;
import java.io.InputStream;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;







import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;











import model.Postit;
import model.User;



import com.fasterxml.jackson.core.JsonProcessingException;

import control.*;

@Path("/userservice")
/**
 * This class routes to /userservice from the URL of our Server.
 * It offer functionality to everything relating to User Data in our DB.
 * Including: Finding a User by their ID, complete lists
 * @author Chris
 *
 */
public class UserService {

	/**
	 * This Method will fetch a User by its id and return it as a json with
	 * response code 200. TODO: Add a Functionality for 404 or forbidden 405
	 * responses.
	 * 
	 * @param msg
	 *            The int for which User you want to fetch.
	 * @return Fitting Response as MIME-Type with an enclosed JSON.
	 */
	@GET
	@Produces("application/json")
	@Path("find/{param}")
	public Response findUser(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			User result = UserManagement.getUserbyID(msg);
			Utilities utilities = new Utilities();

			try {
				
				result.setPassword(null);
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
				return Response.status(404).entity(fulljson).build();
			}
			
			Object jayson = fulljson;

			return Response.status(200).entity(jayson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	
	@GET
	@Produces("application/json")
	@Path("find_root/{param}")
	public Response findUserWithRoot(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			User result = UserManagement.getUserbyID(msg);
			Utilities utilities = new Utilities();

			try {
				
				result.setPassword(null);
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
				return Response.status(404).entity(fulljson).build();
			}
			fulljson = "{\"user\":" + fulljson + "}";
			Object jayson = fulljson;

			return Response.status(200).entity(jayson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}

	@GET
	@Produces("application/json")
	@Path("fetchall")
	public Response fetchAllUsers() {
		String fulljson = "";
		try {
			List<User> result = UserManagement.fetchAllUsers();
			Utilities utilities = new Utilities();

			try {
				
				for(User u : result)
				{
					u.setPassword(null);
				}
				
				fulljson = utilities.toJsonList(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}

			
			return Response.status(200).entity(fulljson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}

	/**
	 * TODO: Write Method that correctly parses a REST request.
	 * For correct form refer to \src\main\resources\example_user.json
	 * 
	 * @param x
	 */

	@POST
	@Consumes("application/json")
	@Path("create_by_json")
	public Response createUserJson(File json) {
		
		try {
			JsonUnmarshaller jc = new JsonUnmarshaller();
			User user = jc.UnmarshalJsonUser(json);
			UserManagement.createUserFromUser(user);

		} catch (Exception e) {

			e.printStackTrace();
			System.out
					.println("Marshalling went wrong.");
			
			return Response.status(400).build();
		}
		return Response.status(200).build();

	}
	
	
	/**
	 * Specify an ID and this Method will delete the corresponding Postit in the Database.
	 */
	@DELETE
	@Path("delete/{param}")
	public Response delete(@PathParam("param") int msg) {

		try {
			UserManagement.deleteUser(msg);

			} catch (Exception e) {

				e.printStackTrace();
				System.out
						.println("Cant find the source to be deleted.");
				return Response.status(404).build();
			}


			return Response.status(200).build();
	}

	@GET
	@Path("/test3")
	public Response listShow() {

		List<User> result = UserManagement.fetchAllUsers();
		String output = "The Servlet will now display all Users";

		for (User n : result) {
			output = output + n;
		}
		return Response.status(200).entity(output).build();

	}

	/**
	 * Updates a User with a provieded JSON
	 * @param id The user to update
	 * @param json the body json with all the relevant information.
	 * @return
	 */
	@PUT
	@Consumes("application/json")
	@Path("update/{id}")
	public Response updateUserByID(@PathParam("id") int id, File json) {
		
	
		try {
			JsonUnmarshaller jc = new JsonUnmarshaller();
			User user = jc.UnmarshalJsonUser(json);

			UserManagement.updateUser(id, user);

		} catch (Exception e) {

			e.printStackTrace();
			System.out
					.println("Marshalling went wrong.");
			
			return Response.status(400).build();
		}
		return Response.status(200).build();

	}
	
}   