+----------+         +----------+         +----------+
|   User   |         |   Item   |         |   Beach  |
+----------+         +----------+         +----------+
|   UserId |         |  ItemId  |         |  BeachId |
| Username |         | ItemName|         | BeachName |
|   Email  |<------- |   UserId |<-------|          |
|          |         | BeachId  |>-------|          |
+----------+         +----------+         +----------+
Explanation:

The User entity represents a user who can list an item on the Lost and Found Board. It has attributes like UserId, Username, and Email.
The Item entity represents an item that a user has listed on the Lost and Found Board. It has attributes like ItemId and ItemName, and a foreign key UserId to link it to the user who listed it.
The Beach entity represents the location where the item was presumably lost. It has attributes like BeachId and BeachName. The Item entity has a foreign key BeachId to link it to the Beach where it was lost.
This ERD shows the relationships between the three entities in the Lost and Found Board, with User being related to Item through a one-to-many relationship (one user can list many items), and Item being related to Beach through a many-to-one relationship (many items can be lost at the same beach).