import express from "express";
const router = express.Router();
import {auth} from "../middleware/auth.js";
import {allContacts, getContact, createContact, updateContact, deleteContact} from "../controllers/contacts.js";


/**
 * @swagger
 * components:
 *  schemas:
 *      Contact:
 *          type: object
 *          required: 
 *              - user_id
 *              - name
 *              - email
 *              - phone
 *          properties:
 *              _id:
 *                  type: string
 *                  description: The auto-generated id of the contact
 *              user_id:
 *                  type: string
 *                  description: The user id associated with the contact
 *              name:
 *                  type: string
 *                  description: The name of the contact
 *              email:
 *                  type: string
 *                  description: The email address of the contact
 *              phone:
 *                  type: string
 *                  description: The phone number of the contact
 *          example: 
 *              _id: dewdsc3r42fe
 *              user_id: de3wqf23fe
 *              name: Richard
 *              email: richardosunmu@gmail.com
 *              phone: 08090564963
 */

/**
 * @swagger
 * tags:
 *  name: Contacts
 *  description: The Contacts Managing API
 */

/**
 * @swagger
 * /api/contacts:
 *  get:
 *      summary: Returns a list of all the Contacts
 *      tags: [Contacts]
 *      responses: 
 *          200:
 *              description: The list of the Contacts
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Contact'
 * 
 */

// A neat way to use / implement my Auth middleware on all the contacts routes
//router.use(auth);

router.get("/", allContacts)

/**
 * @swagger
 * /api/contacts/{id}:
 *  get:
 *      summary: Get a particular book by Id
 *      tags: [Contacts]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: This is the Contact Id
 *      responses: 
 *          200:
 *              description: The Contact Description by Id
 *              content:
 *                  application/json:
 *                      schema:
*                           $ref: '#components/schemas/Contact'
 *          404:
 *              description: The contact was not found
 */

router.get("/:id", auth, getContact)

router.post("/", auth, createContact)

router.put("/:id", auth, updateContact)

router.delete("/:id", auth, deleteContact)

export default router;