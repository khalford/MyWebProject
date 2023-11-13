export function connect_obj() {
    var connection = mysql.createConnection({
        host: "loocalhost",
        user: "readUser",
        password: "dbpassword",
        database: "login_details",
    });
    return connect_obj;
}

