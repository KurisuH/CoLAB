package model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the position database table.
 * 
 */
@Entity
@NamedQuery(name="Position.findAll", query="SELECT p FROM Position p")
public class Position implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String name;

	@Column(name="permission_level")
	private int permissionLevel;

	//bi-directional many-to-one association to User
	@OneToMany(mappedBy="positionBean")
	private List<User> users;

	public Position() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPermissionLevel() {
		return this.permissionLevel;
	}

	public void setPermissionLevel(int permissionLevel) {
		this.permissionLevel = permissionLevel;
	}

	public List<User> getUsers() {
		return this.users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public User addUser(User user) {
		getUsers().add(user);
		user.setPositionBean(this);

		return user;
	}

	public User removeUser(User user) {
		getUsers().remove(user);
		user.setPositionBean(null);

		return user;
	}

}