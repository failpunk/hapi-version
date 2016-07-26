# hapi-version
Add a simple route that shows the current version of your dependencies

### Installation
```
$npm install
```

### Configuration
Simply register as a plugin in your app.
```
registrations: [
        {
            plugin: {
                register: 'hapi-version'
            }
        },
    ]
```

### Usage
The plugin will add the route: `/version` to your application and output a simple json object of current package versions:

Example:
```
{
  "good": "7.0.1",
  "lodash": "4.14.0"
}
```
