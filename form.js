<!DOCTYPE html>
<html>
    <head>
        <title>Patient Appointment List</title>
    </head>
    <body>
<h1>Patient Appointment List</h1>
        <table border="'1" width="100%">
            <tr>
                <th>name</th>
                <th>gender</th>
                <th>phone</th>
                <th>email</th>
                <th>doctor</th>
                <th>timing</th>
                <th>date</th>
            </tr>
            
            <% if(form.length >0) {%>

                <% for(var i=0;i<form.length;i++){%>

                    <tr>
                        <td><%- form[i].name%> </td>
                        <td><%- form[i].gender%> </td>
                        <td><%- form[i].phone%> </td>
                        <td><%- form[i].email%> </td>
                        <td><%- form[i].doctor%> </td>
                        <td><%- form[i].timing %> </td>
                        <td><%- form[i].date %> </td>


                    </tr>

                    <%} %>

            <% }else{ %>
                <h1>Patient Appointment Data is Not Found</h1>
            <% } %>

        </table>
    </body>
</html>