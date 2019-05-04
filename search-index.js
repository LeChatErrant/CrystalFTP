crystal_doc_search_index_callback({"repository_name":"github.com/LeChatErrant/ftp","body":"# ftp\n[![Build Status](https://travis-ci.org/LeChatErrant/ftp.svg?branch=master)](https://travis-ci.org/LeChatErrant/ftp)\n[![star this repo](http://githubbadges.com/star.svg?user=LeChatErrant&repo=ftp&style=default)](https://github.com/LeChatErrant/ftp)\n[![fork this repo](http://githubbadges.com/fork.svg?user=LeChatErrant&repo=ftp&style=default)](https://github.com/LeChatErrant/ftp/fork)\n[![GitHub Issues](https://img.shields.io/github/issues/LeChatErrant/ftp.svg)](https://github.com/LeChatErrant/ftp/issues)\n[![GitHub contributors](https://img.shields.io/github/contributors/LeChatErrant/ftp.svg)](https://GitHub.com/LeChatErrant/ftp/graphs/contributors/)\n![Contributions welcome](https://img.shields.io/badge/contributions-welcome-green.svg)\n[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n> lightweight RFC959 FTP server written in crystal lang\n\n### Note from the creator\n\nHello guys! ;)\n\nThis little baby is still under development. My goal is to make a shard of it once totally finished.\n\nActually, it's my first project written in Crystal : feel free to contribute, or to send tips ! I'm doing it only to train myself.\n\nAnd don't hesitate to give a star if you like it, of course!\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  ftp:\n    github: LeChatErrant/ftp\n```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"ftp\"\n\nserver = Ftp::FTPServer.new(8000, \"/home\")\nserver.start\nsleep\n\n```\n\n## Run example\n\nYou can find an example of utilisation at the root of the repository\n\nTo try it, simply run `crystal build example.cr --release`\n\nThen you can execute it with `./example port root_directory`\n\nThis will run a FTP server, listening on the specified port and mounted on 'root_directory'\n\n## Documentation\n\nhttps://lechaterrant.github.io/ftp/\n\n## Roadmap\n\n- [x] Simple server\n- [x] Handling multiple clients (one fiber per client)\n- [x] Basic commands (QUIT, NOOP, USER, PASS, UNKNOWN)\n- [x] Basic working directory commands (PWD, CWD, CDUP)\n- [x] DELE command\n- [ ] TYPE command\n- [x] HELP command\n- [x] Object oriented version\n- [ ] Configuration file in JSON or YAML\n- [x] Documentation\n- [ ] Specs\n- [x] ACTIV mode\n- [x] PASSIV mode\n- [x] Basic data transferts (LIST, RETR, STOR)\n- [ ] Other RFC959 compliant commands\n- [x] Making a shard of it\n- [ ] Testing concurrency of the server\n- [ ] Multiple simultaneous data transfert on the same user\n\n## Contributing\n\n1. Fork it (<https://github.com/LeChatErrant/ftp/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [LeChatErrant](https://github.com/LeChatErrant) - creator and maintainer\n","program":{"html_id":"github.com/LeChatErrant/ftp/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/LeChatErrant/ftp","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/LeChatErrant/ftp/Ftp","path":"Ftp.html","kind":"module","full_name":"Ftp","name":"Ftp","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"commands/activ.cr","line_number":9,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/activ.cr"},{"filename":"commands/dele.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/dele.cr"},{"filename":"commands/download.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/download.cr"},{"filename":"commands/help.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/help.cr"},{"filename":"commands/list.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/list.cr"},{"filename":"user.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/user.cr"},{"filename":"ftp.cr","line_number":18,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr"},{"filename":"commands/login.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/login.cr"},{"filename":"commands/noop.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/noop.cr"},{"filename":"create_server.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/create_server.cr"},{"filename":"commands/passiv.cr","line_number":9,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/passiv.cr"},{"filename":"commands/quit.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/quit.cr"},{"filename":"commands/size.cr","line_number":3,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/size.cr"},{"filename":"commands/type.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/type.cr"},{"filename":"commands/unknown.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/unknown.cr"},{"filename":"commands/upload.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/upload.cr"},{"filename":"commands/working_directory.cr","line_number":1,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands/working_directory.cr"},{"filename":"commands.cr","line_number":5,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands.cr"}],"repository_name":"github.com/LeChatErrant/ftp","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"An FTP server , or File Transfert Protocol server, is a server used to store files and interact with it from a remote client, through a protocol edicted by the RFC95\n\nFtp is the module containing the `FTPServer` class, the main class for\n\nExample of utilisation\n```\ninclude Ftp\nserver = FTPServer.new(8000, \".\")\nserver.start\nsleep\n```\nThis will launch a FTP server, listening for clients at port 8000, rooted in the current directory","summary":"<p>An FTP server , or File Transfert Protocol server, is a server used to store files and interact with it from a remote client, through a protocol edicted by the RFC95</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/LeChatErrant/ftp/Ftp/FTPServer","path":"Ftp/FTPServer.html","kind":"class","full_name":"Ftp::FTPServer","name":"FTPServer","abstract":false,"superclass":{"html_id":"github.com/LeChatErrant/ftp/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/LeChatErrant/ftp/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/LeChatErrant/ftp/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"ftp.cr","line_number":27,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr"},{"filename":"commands.cr","line_number":6,"url":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/commands.cr"}],"repository_name":"github.com/LeChatErrant/ftp","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"ANONYMOUS","name":"ANONYMOUS","value":"\"anonymous\"","doc":"Downcased anonymous username\n (meaning connecting with it will start an anonymous session)","summary":"<p>Downcased anonymous username  (meaning connecting with it will start an anonymous session)</p>"},{"id":"PASSWORD","name":"PASSWORD","value":"\"password\"","doc":"Default password for new users","summary":"<p>Default password for new users</p>"}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/LeChatErrant/ftp/Ftp","kind":"module","full_name":"Ftp","name":"Ftp"},"doc":"Example of utilisation\n```\ninclude Ftp\nserver = FTPServer.new(8000, \".\")\nserver.start\nsleep\n```\nThis will launch a FTP server, listening for clients at port 8000, rooted in the current directory","summary":"<p>Example of utilisation <code></code>` include Ftp server = FTPServer.new(8000, \".\") server.start sleep <code></code>` This will launch a FTP server, listening for clients at port 8000, rooted in the current directory</p>","class_methods":[],"constructors":[{"id":"new(port:Int32=2121,root:String=&quot;.&quot;)-class-method","html_id":"new(port:Int32=2121,root:String=&amp;quot;.&amp;quot;)-class-method","name":"new","doc":"Create a FTP server, configurate to listen to `port`, and mounted on `root`\n\n```\nmy_ftp_server = Ftp::FTPServer.new(port: 8000, root: \"/home\")\n```\nNOTE : The returned FTP server is not listening for clients : it needs to be started, with `#start`","summary":"<p>Create a FTP server, configurate to listen to <code><a href=\"../Ftp/FTPServer.html#port%3AInt32-instance-method\">#port</a></code>, and mounted on <code><a href=\"../Ftp/FTPServer.html#root%3AString-instance-method\">#root</a></code></p>","abstract":false,"args":[{"name":"port","doc":null,"default_value":"2121","external_name":"port","restriction":"Int32"},{"name":"root","doc":null,"default_value":"\".\"","external_name":"root","restriction":"String"}],"args_string":"(port : Int32 = <span class=\"n\">2121</span>, root : String = <span class=\"s\">&quot;.&quot;</span>)","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L63","def":{"name":"new","args":[{"name":"port","doc":null,"default_value":"2121","external_name":"port","restriction":"Int32"},{"name":"root","doc":null,"default_value":"\".\"","external_name":"root","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(port, root)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"bind-instance-method","html_id":"bind-instance-method","name":"bind","doc":"Starting the FTP server, making clients able to connect and communicate with it","summary":"<p>Starting the FTP server, making clients able to connect and communicate with it</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L84","def":{"name":"bind","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@logger.info(\"FTP server started, rooted at #{@root} and listening on port #{@port}...\")\nloop(&->accept_client)\n"}},{"id":"port:Int32-instance-method","html_id":"port:Int32-instance-method","name":"port","doc":"Port on which the server listen","summary":"<p>Port on which the server listen</p>","abstract":false,"args":[],"args_string":" : Int32","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L32","def":{"name":"port","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@port"}},{"id":"root:String-instance-method","html_id":"root:String-instance-method","name":"root","doc":"Path on which the server is mounted","summary":"<p>Path on which the server is mounted</p>","abstract":false,"args":[],"args_string":" : String","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L35","def":{"name":"root","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@root"}},{"id":"start-instance-method","html_id":"start-instance-method","name":"start","doc":"Starting the FTP server, making clients able to connect and communicate with it\n\nNOTE: The exection is launched in a fiber, so the rest of your program is not blocked\n```\nmy_ftp_server.start\n# From now, the server is accepting clients and handling them properly\nsleep # Yield the execution","summary":"<p>Starting the FTP server, making clients able to connect and communicate with it</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L76","def":{"name":"start","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"spawn do\n  @logger.info(\"FTP server started, rooted at #{@root} and listening on port #{@port}...\")\n  loop(&->accept_client)\nend"}},{"id":"verbose_level=(level:Logger::Severity)-instance-method","html_id":"verbose_level=(level:Logger::Severity)-instance-method","name":"verbose_level=","doc":"Change the level of severity beyond which the logger of your `FTPServer` will print logs\n\nNOTE: When building in release mode, the severity is by default at Logger::ERROR. Otherwise, it is set by default at Logger::INFO","summary":"<p>Change the level of severity beyond which the logger of your <code><a href=\"../Ftp/FTPServer.html\">FTPServer</a></code> will print logs</p>","abstract":false,"args":[{"name":"level","doc":null,"default_value":"","external_name":"level","restriction":"Logger::Severity"}],"args_string":"(level : Logger::Severity)","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L92","def":{"name":"verbose_level=","args":[{"name":"level","doc":null,"default_value":"","external_name":"level","restriction":"Logger::Severity"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@logger.level = level"}}],"macros":[{"id":"default_severity_level-macro","html_id":"default_severity_level-macro","name":"default_severity_level","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/LeChatErrant/ftp/blob/9beed42c6e11c8fcd63c71ca11b613e0bcebc8f6/src/ftp.cr#L37","def":{"name":"default_severity_level","args":[],"double_splat":null,"splat_index":null,"block_arg":null,"visibility":"Public","body":"      \n{% if flag?(:release) %}\n        Logger::ERROR\n      {% else %}\n        Logger::INFO\n      {% end %}\n\n    \n"}}],"types":[]}]}]}})