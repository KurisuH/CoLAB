package rest;


import java.io.File;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.User;

public class Utilities {
	
	public Utilities()
	{
	}

	public String toJson(User user) throws JsonProcessingException
	{
		String jsonUser = "This should be a String json representation of the object you used the Method with.";
		
		try {
	ObjectMapper mapper = new ObjectMapper();

	//Object to JSON in String
	jsonUser = mapper.writeValueAsString(user);
	
	return jsonUser;

	} catch (JsonProcessingException e) {
		e.printStackTrace();
	} 
	return jsonUser;
	}
	
	public String toJsonList(List<User> user) throws JsonProcessingException
	{
		String jsonUser = "This should be a String json representation of the object you used the Method with.";
		
		try {
	ObjectMapper mapper = new ObjectMapper();

	//Object to JSON in String
	jsonUser = mapper.writeValueAsString(user);
	
	return jsonUser;

	} catch (JsonProcessingException e) {
		e.printStackTrace();
	} 
	return jsonUser;
	}
}

