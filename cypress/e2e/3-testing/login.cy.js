describe("Login and Access Profile", () => {
  it("should log in and access the user's profile", () => {
    // Visit the login page or the page where the login functionality is located
    cy.visit("http://127.0.0.1:5500/");

    // Ensure the parent modal is made visible before interacting with the child elements
    cy.get("#loginModal").should("have.css", "display", "none").invoke("show"); // This assumes you are using Bootstrap modal

    // Scroll to the loginEmail input field to make it visible
    cy.get("#loginEmail").scrollIntoView();

    // Now, interact with the login form with valid credentials
    cy.get("#loginForm").click();

    // Use { force: true } for typing into the email and password input fields
    cy.get("#loginEmail").type("12345test@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("12345test", { force: true });

    cy.get("#loginForm").submit();

    // Wait for the login to complete and ensure it's successful
    cy.url().should("include", "profile&name");
    cy.get(".profile-email").should("contain", "12345test@stud.noroff.no");

    // Click the "Log Out" button
    cy.get(".btn.btn-outline-warning.me-2").click();

    // Verify that the user is logged out (you can customize this based on your application)
    cy.url().should("not.include", "profile"); // Assert that the URL no longer includes "profile"
    cy.get("#loginModal").should("have.css", "display", "none"); // Assuming modal is hidden after logout
  });
});
