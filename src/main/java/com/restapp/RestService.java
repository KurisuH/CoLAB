//TO DO Update functionality as needed, use this implementation as reference.

/*package com.restapp;


import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.eclipse.persistence.oxm.MediaType;

import entities.Note;
import eclipselink.service.NoteManagement;

 
@Path("/hello")

public class RestService {
 
	@GET
	@Path("/{param}")
	public Response getMsg(@PathParam("param") String msg) {
 
		String output = "Jersey says : " + msg;
 
		return Response.status(200).entity(output).build();
 
	}
	
	@GET
	@Produces("application/json")
	@Path("Test/{param}")
	public Response FindNote(@PathParam("param") int msg) {
 
		Note result=  NoteManagement.FindNote(msg);
		String finished = Note.ToJSON(result);
		
		String fulljson = "{" + "\"data\":[" + finished + "]}";
		
		Object jayson = fulljson;
		
		
 
		return Response.status(200).entity(jayson).build();
 
	}
	
	@GET

	@Path("/GetNotes")
	public Response Database() {
 
		String output = NoteManagement.FindNote(2).toString();

 
		return Response.status(200).entity(output).build();
 
	}
	
	@GET
	@Path("/Test3")
	public Response ListShow () {
		
		
		List<Note> result = NoteManagement.FetchAllNotes();
		String output = "Jersey will now display all notes" ;
		
	      for(Note n : result)
	      {
		      output = output + n;
	      }

 
		return Response.status(200).entity(output).build();
 
	}
 
}
*/