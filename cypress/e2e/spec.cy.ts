import referralResponse from "../fixtures/referral.json";

describe("REFERRAL", () => {
  it("should be able to create referral", () => {
    cy.intercept("GET", "/api/referral", []);
    cy.intercept("POST", "/api/referral", referralResponse);

    cy.visit("http://localhost:3000");

    const { givenName, surname, email, phone } = referralResponse;

    cy.findByRole("textbox", { name: /given name/i }).type(givenName);
    cy.findByRole("textbox", { name: /surname/i }).type(surname);
    cy.findByRole("textbox", { name: /email/i }).type(email);
    cy.findByRole("textbox", { name: /phone/i }).type(phone);

    cy.findByRole("button", { name: /create referral/i }).click();

    cy.findByText(givenName).should("exist");
    cy.findByText(surname).should("exist");
    cy.findByText(email).should("exist");
    cy.findByText(phone).should("exist");
  });

  it("should be able to update referral", () => {
    cy.intercept("GET", "/api/referral", [referralResponse]);

    cy.visit("http://localhost:3000");

    const newResponse = {
      ...referralResponse,
      givenName: "New Name",
      surname: "New Surname",
      email: "new email",
      phone: "new phone",
    };
    cy.intercept("PUT", `/api/referral/${referralResponse.id}`, newResponse);
    cy.intercept("GET", "/api/referral", [newResponse]);
    const { givenName, surname, email, phone } = newResponse;

    const checkTablePreview = () => {
      cy.findByText(givenName).should("exist");
      cy.findByText(surname).should("exist");
      cy.findByText(email).should("exist");
      cy.findByText(phone).should("exist");
    };

    cy.findByRole("button", { name: /edit/i }).click();
    cy.findByRole("textbox", { name: /given name/i })
      .clear()
      .type(givenName);
    cy.findByRole("textbox", { name: /surname/i })
      .clear()
      .type(surname);
    cy.findByRole("textbox", { name: /email/i }).clear().type(email);
    cy.findByRole("textbox", { name: /phone/i }).clear().type(phone);

    checkTablePreview();

    cy.findByRole("button", { name: /update referral/i }).click();

    checkTablePreview();
  });

  it("should be able to delete referral", () => {
    cy.intercept("GET", "/api/referral", [referralResponse]);
    cy.intercept("DELETE", `/api/referral/${referralResponse.id}`, {}).as(
      "deleteReferral"
    );

    cy.visit("http://localhost:3000");

    const { givenName, surname, email, phone } = referralResponse;

    cy.findByRole("button", { name: /delete/i }).click();
    cy.intercept("GET", "/api/referral", []);
    cy.wait("@deleteReferral");

    cy.findByText(givenName).should("not.exist");
    cy.findByText(surname).should("not.exist");
    cy.findByText(email).should("not.exist");
    cy.findByText(phone).should("not.exist");
  });
});
