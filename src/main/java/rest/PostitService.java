//TO DO Update functionality as needed, use implementation as reference

package rest;

import java.io.File;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import model.Postit;
import model.User;

import org.eclipse.persistence.oxm.MediaType;





import com.fasterxml.jackson.core.JsonProcessingException;

import control.*;

@Path("/postitservice")
/**
 * This class routes to /postitservice from the URL of our Server.
 * It offer functionality to everything relating to Postit Data in our DB.
 * Including: Finding a Postit by their ID, complete lists
 * @author Chris
 *
 */
public class PostitService {

	/**
	 * This Method will fetch a Postit by its id and return it as a json with
	 * response code 200. TODO: Add a Functionality for 404 or forbidden 405
	 * responses.
	 * 
	 * @param msg
	 *            The int for which Postit you want to fetch.
	 * @return Fitting Response as MIME-Type with an enclosed JSON.
	 */
	@GET
	@Produces("application/json")
	@Path("find/{param}")
	public Response findPostit(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			Postit result = PostitManagement.getPostitbyID(msg);
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
	@Path("fetch_all")
	public Response fetchAllPostits() {
		String fulljson = "";
		try {
			List<Postit> result = PostitManagement.fetchAllPostits();
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
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

	
	@GET
	@Produces("application/json")
	@Path("responses/{param}")
	public Response findPostitResponses(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			List<Postit> result = PostitManagement.fetchByResponseTo(msg);
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






	/**
	 * TODO: Write Method that correctly parses a REST request.
	 * Please refer for correct form to /Webtech2Project/src/main/resources/example_postit.json
	 * @param x
	 */
	@POST
	@Consumes("application/json")
	@Path("create_by_json")
	public Response createPostitJson(File json) {
		
		try {
			JsonUnmarshaller jc = new JsonUnmarshaller();
			Postit postit = jc.UnmarshalJsonPostit(json);
			PostitManagement.createPostitFromPostit(postit);

		} catch (Exception e) {

			e.printStackTrace();
			System.out
					.println("Marshalling went wrong.");
			
			return Response.status(400).build();
		}
		System.out
		.println("Added the new Note. No Errors.");
		return Response.status(201).build();

	}
	
	
	/**
	 * This Method will fetch a Postit by its id and return it as a json with
	 * response code 200. TODO: Add a Functionality for 404 or forbidden 405
	 * responses.
	 * 
	 * @param msg
	 *            The int for which Postit you want to fetch.
	 * @return Fitting Response as MIME-Type with an enclosed JSON.
	 */
	@GET
	@Path("delete/{param}")
	public Response delete(@PathParam("param") int msg) {

		String fulljson = "";

		try {
			Postit result = PostitManagement.getPostitbyID(msg);
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
	@Path("/Test3")
	public Response listShow() {

		List<Postit> result = PostitManagement.fetchAllPostits();
		String output = "The Servlet will now display all Postits";

		for (Postit n : result) {
			output = output + n;
		}
		return Response.status(200).entity(output).build();

	}

	// TODO: This method.
	@PUT
	@Consumes("application/json")
	@Path("update/{id}")
	public Response updatePostitByID(@PathParam("id") int id) {

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
