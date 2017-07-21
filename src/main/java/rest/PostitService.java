//TO DO Update functionality as needed, use implementation as reference

package rest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;






import java.io.File;
import java.util.Collections;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
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
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

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

			fulljson = "{\"postit\":" + fulljson + "}";

			return Response.status(200).entity(fulljson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	
	@POST
	@Produces("application/json")
	@Path("increment_clicks/{param}")
	public Response incrementClicks(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		String fulljson = "";

		try {
			PostitManagement.incrementById(msg);
		}
		catch(Exception e)
		{
			System.out.println("Something went wrong with the increment");
			e.printStackTrace();
		}
		
		return Response.status(200).build();

	}
	
	
	@GET
	@Produces("application/json")
	@Path("find_root/{param}")
	public Response findPostitWithRoot(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

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
			fulljson = "{\"postit\":" + fulljson + "}";
			Object jayson = fulljson;

			return Response.status(200).entity(jayson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	@GET
	@Produces("application/json")
	@Path("find_root_bracket/{param}")
	public Response findPostitWithRootBracket(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

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
			fulljson = "{\"postit\":[" + fulljson + "]}";
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
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		
		
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

			String jayson = "{\"postit\":" + fulljson + "}";
			return Response.status(200).entity(jayson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}
	
	
	
	@GET
	@Produces("application/json")
	@Path("postits_by/{param}")
	public Response fetchAllPostitsBy(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		String fulljson = "";

		try {
			List<Postit> result = PostitManagement.fetchByAuthor(msg);
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
				return Response.status(404).entity(fulljson).build();
			}

			fulljson = "{\"postit\":" + fulljson + "}";

			return Response.status(200).entity(fulljson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	
	
	
	@GET
	@Produces("application/json")
	@Path("postits_responses_by/{param}")
	public Response fetchAllPostitsResponsesOnlyBy(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		String fulljson = "";

		try {
			List<Postit> result = PostitManagement.fetchByAuthorOnlyNotPost(msg);
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
				return Response.status(404).entity(fulljson).build();
			}

			fulljson = "{\"postit\":" + fulljson + "}";

			return Response.status(200).entity(fulljson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	@GET
	@Produces("application/json")
	@Path("postits_only_posts/{param}")
	public Response fetchAllPostitsPostOnly(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		String fulljson = "";

		try {
			List<Postit> result = PostitManagement.fetchByAuthorOnlyPost(msg);
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
				return Response.status(404).entity(fulljson).build();
			}

			fulljson = "{\"postit\":" + fulljson + "}";

			return Response.status(200).entity(fulljson).build();
		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}
	}
	
	
	
	@GET
	@Produces("application/json")
	@Path("fetch_all_sort_clicks")
	public Response fetchAllPostitsSortByClicks() {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
	
		
		String fulljson = "";
		try {
			List<Postit> result = PostitManagement.fetchAllPostitsSortedByClicks();
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}

			String jayson = "{\"postit\":" + fulljson + "}";
			return Response.status(200).entity(jayson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}
	
	
	@GET
	@Produces("application/json")
	@Path("fetch_all_sort_date")
	public Response fetchAllPostitsSortByDate() {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		
		
		String fulljson = "";
		try {
			List<Postit> result = PostitManagement.fetchAllPostitsSortedByDate();
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}

			String jayson = "{\"postit\":" + fulljson + "}";
			return Response.status(200).entity(jayson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}
	
	
	
	
	@GET
	@Produces("application/json")
	@Path("fetch_all_sort_date_oldest")
	public Response fetchAllPostitsSortByDateOldest() {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

		
		
		String fulljson = "";
		try {
			List<Postit> result = PostitManagement.fetchAllPostitsSortedByDate();
			Collections.reverse(result);
			Utilities utilities = new Utilities();

			try {
				fulljson = utilities.toJson(result);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}

			String jayson = "{\"postit\":" + fulljson + "}";
			return Response.status(200).entity(jayson).build();

		} catch (Exception e) {
			return Response.status(404).entity(fulljson).build();
		}

	}

	

	
	@GET
	@Produces("application/json")
	@Path("responses/{param}")
	public Response findPostitResponses(@PathParam("param") int msg) {
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}

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

			fulljson = "{\"postit\":" + fulljson + "}";

			return Response.status(200).entity(fulljson).build();
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
		
		String fulljson = "";
		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		
		try {
			Utilities utilities = new Utilities();
			JsonUnmarshaller jc = new JsonUnmarshaller();
			Postit postit = jc.UnmarshalJsonPostit(json);
			
			
			
			if (UserManagement.canAccess(currentUser.getPrincipal().toString(),
					UserManagement.getUserbyID(postit.getAuthor()).getEmail())
					|| currentUser.hasRole("1")) {
			
				if (postit.getContentImage() == null && postit.getContentText() == null  || postit.getContentImage() =="" || postit.getContentText()=="")
				{
					return Response.status(400).entity("Either text or picture requiered.").build();
				}
			int postit_id = PostitManagement.createPostitFromPostit(postit);
			postit.setId(postit_id);
			
			try {
				
				fulljson = utilities.toJson(postit);
			} catch (JsonProcessingException e) {

				e.printStackTrace();
				System.out
						.println("Something went wrong: With Converting String to Json");
			}
			
			}
			else{ 						System.out.println("Not permitted!");
				return Response.status(403).entity("Not permitted!").build();
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out
					.println("Marshalling went wrong.");
			
			return Response.status(400).build();
		}
	
		fulljson = "{\"postit\":" + fulljson + "}";
		System.out
		.println("Added the new Note. No Errors.");
		return Response.status(201).entity(fulljson).build();


	}
	
	
	/**
	 * Specify an ID and this Method will delete the corresponding Postit in the Database.
	 */
	@DELETE
	@Path("delete/{param}")
	public Response delete(@PathParam("param") int msg) {
		
		

		
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();
		
		
		
		
		if ( !currentUser.isAuthenticated() ) { System.out.println("Not authenticated!"); return Response.status(403).build();}
		
		try {
			
			Postit result = PostitManagement.getPostitbyID(msg);
			
			if(UserManagement.canAccess(currentUser.getPrincipal().toString(), UserManagement.getUserbyID(result.getAuthor()).getEmail()) || currentUser.hasRole("1")){ 
			
			PostitManagement.deletePostitbyID(msg);
			}else{System.out.println("Not permitted!"); return Response.status(403).entity("Not permitted!").build();}
			} catch (Exception e) {

				e.printStackTrace();
				System.out
						.println("Cant find the source to be deleted.");
				return Response.status(404).build();
			}


			return Response.status(200).build();
	}
	
	/**
	 * Updates a Postit with a provieded JSON
	 * @param id The Postit to update
	 * @param json the body json with all the relevant information.
	 * @return
	 */
	@POST
	@Consumes("application/json")
	@Path("update/{id}")
	public Response updatePostitByID(@PathParam("id") int id, File json) {

		String fulljson = "";
		Subject currentUser = SecurityUtils.getSubject();
		Session session = currentUser.getSession();

		if (!currentUser.isAuthenticated()) {
			System.out.println("Not authenticated!");
			return Response.status(403).build();
		}
		try {

			Postit result = PostitManagement.getPostitbyID(id);
			if (UserManagement.canAccess(currentUser.getPrincipal().toString(),
					UserManagement.getUserbyID(result.getAuthor()).getEmail())
					|| currentUser.hasRole("1")) {

				JsonUnmarshaller jc = new JsonUnmarshaller();
				Postit postit = jc.UnmarshalJsonPostit(json);

				if (postit.getContentImage() == null && postit.getContentText() == null  || postit.getContentImage() =="" || postit.getContentText()=="")
				{
					return Response.status(400).entity("Either text or picture requiered.").build();
				}
				
				
				PostitManagement.updatePostit(id, postit);

				try {

					Postit new_postit = PostitManagement.getPostitbyID(id);
					Utilities utilities = new Utilities();

					try {
						fulljson = utilities.toJson(result);
					} catch (JsonProcessingException e) {

						e.printStackTrace();
						System.out
								.println("Something went wrong: With Converting String to Json");
						return Response.status(400).entity("Invalid JSON, check for correct syntax. Either text or picture requiered.").build();
					}
					fulljson = utilities.toJson(new_postit);
					fulljson = "{\"postit\":" + fulljson + "}";

				} catch (Exception e) {
					return Response.status(404).entity(fulljson).build();
				}

			}

			else {
				System.out.println("Not permitted!");
				return Response.status(403).entity("Not permitted!").build();
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out.println("Marshalling went wrong.");

			return Response.status(400).build();
		}
		return Response.status(200).entity(fulljson).build();

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


}
