TodoMessenger
=============

A todo application that is prepared for two roles (user and administrator).
Web application was created with generate-angularfire.

### Functionality description:

#### @user
- get messages
  - limited to the last 24 hours
  - sorted by priority and received date ascending
- mark a message as read
- acknowledge a message as done
- upload picture and attach to message

#### @administrator
(can use the same functionality as a user)
- create new message
- edit message 

```JavaScript
message: {
  receivedAt,
  priority,
  text,
  note,
  marked: { at, by },
  acknowledged: { at, by },
  indicator (done | read | null)
}
```