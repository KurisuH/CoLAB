package rest;

import java.io.File;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.User;

/**
 * Offers functionality to convert an Object to a JSON representation.
 * 
 * @author Chris
 *
 */
public class Utilities {

	public Utilities() {
	}

	public String toJson(User user) throws JsonProcessingException {
		String jsonUser = "This should be a String json representation of the object you used the Method with.";

		try {
			ObjectMapper mapper = new ObjectMapper();

			// Object to JSON in String
			jsonUser = mapper.writeValueAsString(user);

			return jsonUser;

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return jsonUser;
	}

	public String toJsonList(List<User> user) throws JsonProcessingException {
		String jsonUser = "This should be a String json representation of the object you used the Method with.";

		try {
			ObjectMapper mapper = new ObjectMapper();

			// Object to JSON in String
			jsonUser = mapper.writeValueAsString(user);

			return jsonUser;

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return jsonUser;
	}

	// TODO: Check functionality. Should work though!
	/**
	 * Experimental implementation. Should work for any object that could be
	 * parsed as a JSON.
	 * 
	 * @param user
	 * @return
	 * @throws JsonProcessingException
	 */

	public String toJson(Object tojson) throws JsonProcessingException {
		String newjson = "This should be a String json representation of the object you used the Method with.";

		try {
			ObjectMapper mapper = new ObjectMapper();

			// Object to JSON in String
			newjson = mapper.writeValueAsString(tojson);

			return newjson;

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return newjson;
	}
}
