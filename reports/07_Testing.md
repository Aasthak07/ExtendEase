# CHAPTER 7: TESTING

## 7.1 Introduction to Software Testing
Testing was recognized as the most critical iterative stage within the Software Development Life Cycle (SDLC). It was executed primarily to ensure that the produced software product fulfilled its expected algorithmic, functional, and structural requirements. When testing ExtendEase, the core objective was to establish systematic anomaly detection boundaries. This helped to isolate underlying logic bugs that could prevent catastrophe executions in local user environments.

## 7.2 Unit Testing
Unit Testing was utilized to validate discrete execution blocks systematically. It targets minimal logic segments individually.
1. **Model Validation Testing:** Assertions were run to confirm that attempting to execute `.save()` on an `Extension` Schema void of the mandatory `identifier` input threw a `ValidationError` from the Mongoose ORM directly.
2. **Component Rendering Test:** Render logic was scrutinized to ensure that raw React components, such as `CardGrid`, executed safely without crashing the localized Virtual DOM even when fed a null array or a malformed dataset.

## 7.3 Integration Testing
Integration Testing was designed to investigate specifically how isolated logic tiers communicated when subjected to overlapping parameters.
1. **API to DB Interfacing:** Tests evaluated whether executing the standard Express `POST /api/extensions` route accurately appended data deep into MongoDB and generated correct 201 JSON responses concurrently.
2. **Frontend UI to API Interfacing:** Through mocking Axios `GET` requests for the Extension metadata, developers observed how asynchronous `Promises` were rendered reliably using localized React `useEffect` logic.

## 7.4 System Testing
System Testing evaluated the complete integrated platform. These tests mirrored the exact End-to-End User requirement metrics broadly defined at the beginning of the project pipeline.
1. **Security Vulnerability Validation:** Standard User endpoints were heavily tested using expired, manually modified, or entirely absent JSON Web Tokens. It was confirmed that the system correctly routed those anomalous requests to HTTP 403 authorization blocks securely.
2. **URI Dispatch Check:** Final integrated evaluation forced Google Chrome to trigger predefined `vscode://` strings, prompting operating system terminal intercepts effectively and successfully installing extensions directly into the local desktop IDE.

## 7.5 Test Cases

**Table 7.1: UI and Integration Test Case Matrix**

| Test Case ID | Test Component | Prerequisite Constraints | Execution Steps | Expected Behavior Output | Status Validation |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-01** | User Registration Form | Network Connection active, Database active. | Fill name, invalid email format, password and submit | Formik schema catches regex failure naturally highlighting input red. | **Pass** |
| **TC-02** | User Authentication Login | Valid registered User exists structurally in DB. | Provide valid Email, Password -> Click submit logic | Axios receives generic JWT Token persisting inside specific LocalStorage layer. | **Pass** |
| **TC-03** | Restricted Administrative Route Access | User logged in possessing generic Standard User JWT | User manually forces routing matching `/api/admin/*` | Express middleware inherently blocks traffic returning rigid HTTP 401 Unauthorized Error | **Pass** |
| **TC-04** | Valid Extension Upload | Publisher uniquely logged in. | Fills valid text schemas, version numbers -> Click Publish | DB structurally writes pending document. Frontend React Routes instantly dispatch 'Awaiting Verification' Modal. | **Pass** |
| **TC-05** | Rating Limit Structural Override | User possesses previous identically matched ID rating. | User structurally submits parallel reviewing JSON package. | Node Server rejects duplication logic natively via Unique Compound indexes. | **Pass** |
| **TC-06** | VS Code Install Protocol Trigger | Visual Studio Code logically installed locally globally. | User identically selects specific Plugin Install Button action. | OS triggers desktop IDE extension native tab prompt requesting explicit user install approval. | **Pass** |
