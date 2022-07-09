[HOME](/)
[LISTS](/lists)
[CUSTOM](..)

# news.google.com
basic rss syntax
```
https://news.google.com/rss?WORLD&hl=en-US&gl=US&ceid=US:en
news.google.com/rss
<TOPIC>&
found below
hl=<language>&
standard code
gl=<COUNTRY>&
same
ceid=<COUNTRY:language>
auto included if excluded (no doc), redundant as hl and gl do the same
```
you can also add
- `q=<SEARCH+WORDS>&` after the `rss?` for queries
- also supports `site:exam.ple` for those without rss
- `+when:12h` after query to limit time published
- `+after:YEAR-MON-DAY` and before to limit date published

## TOPIC
world, nation (YMMV), business, entertainment, health, science, sports, technology
- more hidden topics can be found by searching thru the web ui

for nation, it can be excluded if you want local news and youve already inputed the rest of the basic url. more specific nation|country may not matter. there are many sources claiming otherwise and there arent any official doc

### GEOLOCATION