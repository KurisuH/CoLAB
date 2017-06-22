package model;

import java.util.Date;

import javax.xml.*;
import javax.xml.bind.annotation.*;

@XmlRootElement(name = "results", namespace = "http://example.org")
@XmlAccessorType(XmlAccessType.FIELD)

/**
 * Class used for unmarshalling from the provided XML.
 * For usage please see PersonProcessor.java under control.
 * @author Chris
 *
 */
public class Person {

	@XmlElement(name = "gender", namespace = "http://example.org")
	private String gender;

	@XmlElement(name = "first", namespace = "http://example.org")
	private String name;

	@XmlElement(name = "last", namespace = "http://example.org")
	private String surname;

	@XmlElement(name = "email", namespace = "http://example.org")
	private String email;

	@XmlElement(name = "username", namespace = "http://example.org")
	private String username;

	@XmlElement(name = "password", namespace = "http://example.org")
	private String password;

	@XmlElement(name = "registered", namespace = "http://example.org")
	private String registered;

	@XmlElement(name = "phone", namespace = "http://example.org")
	private String phone;

	@XmlElement(name = "cell", namespace = "http://example.org")
	private String fax;

	@XmlElement(name = "large", namespace = "http://example.org")
	private String picturelarge;

	@XmlElement(name = "nat", namespace = "http://example.org")
	private String nationality;

	@XmlElement(name = "postcode", namespace = "http://example.org")
	private String position;

	@XmlElement(name = "city", namespace = "http://example.org")
	private String address;

	private Date date;

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRegistered() {
		return registered;
	}

	public void setRegistered(String registered) {
		this.registered = registered;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getPicturelarge() {
		return picturelarge;
	}

	public void setPicturelarge(String picturelarge) {
		this.picturelarge = picturelarge;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Date getDate() {
		date = new Date();
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
