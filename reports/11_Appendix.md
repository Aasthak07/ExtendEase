# APPENDIX

## Appendix A: Installation and Environment Setup Manual
This appendix outlined the explicit technical steps required for a developer to pull the repository and test the ExtendEase application environment locally.

**A.1 Prerequisite Requirements:**
1. Statically installing Node.js (v18+) precisely via the official mirror available at `https://nodejs.org/`.
2. Establishing a standard MongoDB environment locally, or structurally generating a connection string mapped to the MongoDB Atlas Cloud.
3. Installing the primary text editing environment targeting Microsoft Visual Studio Code directly.

**A.2 Backend Configuration Implementation:**
1. Navigating inside standard terminal paths explicitly into the correct directory: `cd backend`
2. Executing generic Javascript package manager logic: `npm install`
3. Explicitly constructing standard hidden `.env` files matching the required variables respectively:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ExtendEase
TOKEN_SECRET=your_arbitrary_random_secure_key
```
4. Triggering the Node server boot process seamlessly: `npm run dev`

**A.3 Frontend Configuration Implementation:**
1. Navigating inside equivalent path structures pointing toward the client: `cd frontend`
2. Executing NPM package commands directly replacing missing React configurations: `npm install`
3. Running the React compilation process safely pointing to Vite/Next: `npm run dev`

## Appendix B: Protocol Handlers Details
ExtendEase was developed to dynamically force binary dispatch overrides securely leveraging Operating System URI routing architectures defined heavily by Microsoft.

When the button corresponding to a React component was clicked natively, a generated anchor tag explicitly matched the following structure mathematically:
`<a href="vscode:extension/publisher-name.extension-name">Install</a>`

Rather than evaluating an arbitrary `HTTPS://` web address, generic browsers recognized the explicit `vscode://` scheme. They explicitly dumped the parameter out of the browser security tier, allowing the underlying explicit Operating System registry to pick the target parameter securely up, triggering Microsoft VS Code commands exactly matching local installations.
