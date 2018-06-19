# pet-hotel-extended-weekend-assignment


Questions for Mary or Dev: 
[] PUT has never worked. On click, it grabs the right ID and then throws this error: error: syntax error at or near "WHERE is_checked_in"

My query: 
```UPDATE pets```
```SET is_checked_in = CURRENT_TIMESTAMP WHERE is_checked_in IS NULL AND id=$1;`;```

[] How would I only delete owners when they have 0 pets?

Let me know if you need more details!
