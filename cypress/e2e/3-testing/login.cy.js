describe("Login and Access Profile", () => {
  it("should log in and access the user's profile", () => {
    // Visit the login page or the page where the login functionality is located
    cy.visit("http://127.0.0.1:5500/"); // Update the URL as needed

    // Fill in the login form with valid credentials
    cy.get('button[type="button"]').click();
    cy.get('input[name="email"]').type("12345test@stud.noroff.no"); // Update with a valid email
    cy.get('input[name="password"]').type("12345test"); // Update with a valid password
    cy.get('button[type="submit"]').click();

    // Wait for the login to complete and ensure it's successful
    cy.url().should("include", "/profile"); // Update with the URL you expect after a successful login
    cy.get(".profile-info").should("contain", "Welcome"); // Update with a relevant profile element selector

    // You can add more assertions to check the user's profile data if needed
  });
});
