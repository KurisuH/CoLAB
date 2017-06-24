//TO DO Update functionality as needed, use implementation as reference

package rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import model.User;

import org.eclipse.persistence.oxm.MediaType;

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
	@Path("finduser/{param}")
	public Response findUser(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			User result = UserManagement.getUserbyID(msg);
			Utilities utilities = new Utilities();

			try {
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
	@Path("fetchallusers")
	public Response fetchAllUsers() {
		String fulljson = "";
		try {
			List<User> result = UserManagement.fetchAllUsers();
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJsonList(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}

			Object jayson = fulljson;
			return Response.status(200).entity(jayson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}

	/**
	 * TODO: Write Method that correctly parses a REST request.
	 * 
	 * @param x
	 */
	@POST
	@Consumes("text/plain")
	@Path("createuser")
	public void createUserbyPlain(String x) {
		System.out.println(x);
	}

	@POST
	@Consumes("text/plain")
	@Path("createuserjson")
	public void createUserJson(String x) {
		System.out.println(x);
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

	// TODO: This method.
	@PUT
	@Consumes("application/json")
	@Path("update/{id}")
	public Response updateUserByID(@PathParam("id") int id) {

		String output = "";
		return Response.status(200).entity(output).build();

	}
	/*
	 * @GET
	 * 
	 * @Path("/{param}") public Response getMsg(@PathParam("param") String msg)
	 * {
	 * 
	 * String output = "Jersey says Hello Mr/Mrs " + msg
	 * +". Enjoy how well we can read parameter.";
	 * 
	 * return Response.status(200).entity(output).build();
	 * 
	 * }
	 */

}
