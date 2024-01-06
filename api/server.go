package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

// Handling get requests by client
func getRequestsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, fmt.Sprintf("%s Method is not supported", r.Method), http.StatusNotFound)
		return
	}
	url := r.URL.Path
	fmt.Println(r.Body)
	fmt.Println(r.Header)
	fmt.Println(r.URL)
	switch url {
	case "/":
		fmt.Fprintf(w, "Kuizzical API Service\n\nRevert to /v1/help to see man page")
	case "/v1/help":
		fmt.Fprintf(w, "Kuizzical API Man Page\n\nThis page provides a list of API endpoints and their respective methods and information.")
	case "/v1/auth":
		// Authenticate user information
	case "/v1/token":
		// Return token information to allowed users
	case "/v1/db/content":
		// Return the content of the DB file
	case "/v1/db/quiz":
		// Return information about certain quizzes
	default:
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
}

// Handling post requests by client
func postRequestsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, fmt.Sprintf("%s Method is not supported", r.Method), http.StatusNotFound)
		return
	}
	url := r.URL.Path
	switch url {
	case "/":
		fmt.Fprintf(w, "Kuizzical API Service\n\nRevert to /v1/help to see man page")
	case "/user":
		fmt.Fprintf(w, "Adding user")
	default:
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
}

func createDbFile() *os.File {
	fmt.Println("Creating file since no file found...")
	file, err := os.Create("kuizzicalDB.db")
	if err != nil {
		fmt.Printf("Error creating file: %s\n", err)
	}
	fmt.Println("File created successfully")
	return file
}

func handleFileUponStart() *os.File {
	file, err := os.Open("kuizzicalDB.db")
	if err != nil {
		fmt.Println("File not created yet, creating new file...")
		file = createDbFile()
	}
	fmt.Println("File opened successfully")
	return file
}

func writeToDb(content string, file *os.File) {
	_, err := file.WriteString(content)
	if err != nil {
		fmt.Printf("Error writing to db file: %s\n", err)
		file.Close()
		return
	}
}

func readDbFile() string {
	db_file_contents, err := ioutil.ReadFile("kuizzicalDB.db")
	if err != nil {
		fmt.Printf("Error caught: %s\n", err)
	}
	return string(db_file_contents)
}

func main() {
	db_file := handleFileUponStart()
	defer db_file.Close()

	http.HandleFunc("/", getRequestsHandler)

	fmt.Printf("Server started at port 6969\n")
	if err := http.ListenAndServe(":6969", nil); err != nil {
		log.Fatalln(err)
	}
}
