- MySQL Datenbank aufsetzen nach folgenden Parametern: 

         <property name="javax.persistence.jdbc.url" value="jdbc:mysql://127.0.0.1:3306/colab"/>
         <property name="javax.persistence.jdbc.user" value="root"/>
         <property name="javax.persistence.jdbc.password" value="student"/>

- Schema anlegen
- Schema name: colab
- "MySQL_Setup.sql" aus diesem ordner auf Datenbank ausfuhren.

- Tomcat installieren und standartmasig auf Localhost 8080.
- WebtechProjekt2.war in Webapps ablegen.
- Ordner "colab" aus diesem Ordner in tomcat "webapps" Directory ziehen. (siehe bild)

- Tomcat starten und folgende URL aufrufen um die Datenbank mit Beispieldaten zu fullen:

http://localhost:8080/Webtech2Project/rest/login/setup

CoLAB ist nun unter "http://localhost:8080/Webtech2Project/" erreichbar.

Admin Account: "admin@admin.de" passwort: admin
Einer der BSP Nutzer Accounts: rachel.douglas@example.com passwort: cattle