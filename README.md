Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?

Whitelisting IP addresses is important because it restricts access to a system only to trusted sources, reducing the attack surface. Allowing connections from 0.0.0.0/0 means any IP address in the world can attempt to connect, which introduces security risks.

What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?


The dotenv package is used to load environment variables from a .env file into a Node.js application. This allows developers to keep sensitive information—such as API keys out of the source code. Other method that can be used to manage environment variables in a production environment are Cloud platform settings like AWS and Vercel.

