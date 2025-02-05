## User Story 1: Register User
**As a** new user  
**I want to** register on the platform  
**So that** I can access the GiftLink services  

### Acceptance Criteria:
- A registration form should be available.
- Users should be able to input their username, email, and password.
- A successful registration should return a JWT token.

**Label:** `new`

---

## User Story 2: User Login
**As a** registered user  
**I want to** log in using my email and password  
**So that** I can access my personal dashboard  

### Acceptance Criteria:
- A login form should be available.
- Users should provide email and password.
- Incorrect credentials should show an error message.
- A successful login should return a JWT token.

**Label:** `new`

---

## User Story 3: Create Gift Listings
**As a** registered user  
**I want to** create new gift listings  
**So that** I can offer gifts for others to view  

### Acceptance Criteria:
- Users should be able to add a gift name, description, category, and price.
- The form should validate inputs before submission.
- The newly created gift should be stored in the database.

**Label:** `icebox`

---

## User Story 4: View Available Gifts
**As a** visitor  
**I want to** browse through a list of available gifts  
**So that** I can find interesting items  

### Acceptance Criteria:
- The homepage should display all available gifts.
- Each gift should show name, category, and price.
- Pagination should be applied if the number of gifts is large.

**Label:** `new`

---

## User Story 5: Gift Search & Filtering
**As a** visitor  
**I want to** search for gifts by category  
**So that** I can quickly find relevant gifts  

### Acceptance Criteria:
- A search bar should be available on the homepage.
- Users should be able to filter gifts by category.
- Search results should update dynamically.

**Label:** `technical debt`

---

## User Story 6: Edit Gift Listings
**As a** registered user  
**I want to** edit my previously listed gifts  
**So that** I can update their details  

### Acceptance Criteria:
- Users should only be able to edit gifts they created.
- Changes should be reflected immediately after saving.
- Validation should be applied to prevent incorrect updates.

**Label:** `backlog`

---

## User Story 7: Delete Gift Listings
**As a** registered user  
**I want to** delete my gift listings  
**So that** I can remove outdated or incorrect gifts  

### Acceptance Criteria:
- Users should only be able to delete gifts they created.
- A confirmation prompt should appear before deletion.
- Once deleted, the gift should no longer appear in the list.

**Label:** `backlog`

---

## User Story 8: User Logout
**As a** logged-in user  
**I want to** log out of my account  
**So that** I can ensure my session is secure  

### Acceptance Criteria:
- A "Logout" button should be available in the navigation.
- Clicking the button should clear authentication tokens.
- Users should be redirected to the login page after logging out.

**Label:** `new`