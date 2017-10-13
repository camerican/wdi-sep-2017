
# User records
User.create([
  {id: 1, first: 'Lisa', last: 'Pegher', slack: 'lisamae', github: 'Kgallagher281', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6WT2E4JJ-8f5202eea9c9-512'},
  {id: 2, first: 'Mahima', last: 'Tuladhar', slack: 'mahima', github: 'lisa1357mae', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6XC01KA8-394be3c3ce97-512'},
  {id: 3, first: 'Kevin', last: 'Gallagher', slack: 'kgallagher', github: 'Kgallagher281', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6ZECGEUF-0bcc31931324-512'},
  {id: 4, first: 'Jack', last: 'Floyd', slack: 'mjfloyd3', github: 'mjfloyd3', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6VH16CQ1-73d7094a66ba-512'},
  {id: 5, first: 'Valerie', last: 'Kirby', slack: 'vpkirby002', github: 'vpkirby002', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6XNWCY6T-c4c69c2d80d6-512'},
  {id: 6, first: 'Christy', last: 'Kusuma', slack: 'ckusuma', github: 'christykusuma', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6VBJ2URE-7255eee92e8d-512'},
  {id: 7, first: 'Joan', last: 'Borbon', slack: 'jborbon', github: 'jborbon', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6Y9JEA03-ga39e4c660cc-512'},
  {id: 8, first: 'Veronica', last: 'Martinez', slack: 'martinezvea', github: 'martinezvea', photo: 'https://ca.slack-edge.com/T03JJLPSP-U2QPMNQE7-b9b7fd877945-512'},
  {id: 9, first: 'Vikki', last: 'Braxton', slack: 'vbraxtvi', github: 'digmyz', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6X55A4LX-c20130205319-512'},
  {id: 10, first: 'Daniel', last: 'Bobadilla', slack: 'daniel1995db', github: 'Daniel1995db', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6YFN9WER-174ec73e16dc-512'},
  {id: 11, first: 'Mikey', last: 'Lane', slack: 'mikeydlane', github: 'mikeydlane', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6W6NQZNU-9f74e019eb18-512'},
  {id: 12, first: 'Don', last: 'Chiamthamachinda', slack: 'don.chiam', github: 'donchiam', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6VUTD7UH-647172c98c2b-512'},
  {id: 13, first: 'John', last: 'Murphy', slack: 'john.murphy', github: 'jmurphy2404', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6ZECGYG7-g54d1d822fae-512'},
  {id: 14, first: 'Sherill', last: 'Samuel', slack: 'sherill', github: 'Shesam1', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6XRR4EM7-bd0547d3f086-512'},
  {id: 15, first: 'Sophie', last: 'Bushman', slack: 'sophiebushman', github: 'sophiebushman', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6W4DK8QJ-6f074c9e8a30-512'},
  {id: 16, first: 'Michael', last: 'Teixeira', slack: 'teixeiramichael5', github: 'MikeTeixeira', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6WAD2J93-g3318995132d-512'},
  {id: 17, first: 'Boony', last: 'Guzman', slack: 'josuegv7', github: 'josuegv7', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6VD69QF2-2e108b45e7f8-512'},
  {id: 18, first: 'Elise', last: 'Barnes', slack: 'barnese3', github: 'barnese3', photo: 'https://ca.slack-edge.com/T03JJLPSP-U6W7RCB34-g1a37e409440-512'}
])

# Payment records
Payment.create([
  {id: 1, payer_id: 1, payee_id: 2, amount: 1000, created_at: "20171012-14:14:00"},
{id: 2, payer_id: 11, payee_id: 13, amount: 420, created_at: "20171012-14:14:01"},
{id: 3, payer_id: 1, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:02"},
{id: 4, payer_id: 2, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:03"},
{id: 5, payer_id: 3, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:04"},
{id: 6, payer_id: 4, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:05"},
{id: 7, payer_id: 5, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:06"},
{id: 8, payer_id: 6, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:07"},
{id: 9, payer_id: 7, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:08"},
{id: 10, payer_id: 8, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:09"},
{id: 11, payer_id: 9, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:10"},
{id: 12, payer_id: 10, payee_id: 14, amount: 599.99, created_at: "20171012-14:14:11"}
])

# Group records

Group.create([
  {id: 14, name: "WDI Trivia", description: "NYC WDI September 2017"}
])

UserGroup.create([
  {user_id: 1, group_id:14},
  {user_id: 2, group_id:14},
  {user_id: 3, group_id:14},
  {user_id: 4, group_id:14},
  {user_id: 5, group_id:14},
  {user_id: 6, group_id:14},
  {user_id: 7, group_id:14},
  {user_id: 8, group_id:14},
  {user_id: 9, group_id:14},
  {user_id: 10, group_id: 14},
  {user_id: 11, group_id: 14},
  {user_id: 12, group_id: 14},
  {user_id: 13, group_id: 14},
  {user_id: 14, group_id: 14},
  {user_id: 15, group_id: 14},
  {user_id: 16, group_id: 14},
  {user_id: 17, group_id: 14},
  {user_id: 18, group_id: 14}
])


