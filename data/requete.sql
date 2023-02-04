BEGIN;

CREATE TABLE  "user" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "firstname" text NULL,
  "lastname" text NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

INSERT INTO "user"
   (
    "id",
    "firstname",
    "lastname",
    "email",
    "password"
  )
VALUES
  (
    
    'karim',
    'mr',
    'karim@gmail.com',
    'sousse'
  );

COMMIT;