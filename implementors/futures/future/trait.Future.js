(function() {var implementors = {};
implementors["tk_http"] = ["impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>, D:&nbsp;<a class=\"trait\" href=\"tk_http/server/trait.Dispatcher.html\" title=\"trait tk_http::server::Dispatcher\">Dispatcher</a>&lt;S&gt;&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tk_http/server/struct.Proto.html\" title=\"struct tk_http::server::Proto\">Proto</a>&lt;S, D&gt;","impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tk_http/server/struct.FutureRawBody.html\" title=\"struct tk_http::server::FutureRawBody\">FutureRawBody</a>&lt;S&gt;","impl&lt;S, T, D, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tk_http/websocket/struct.Loop.html\" title=\"struct tk_http::websocket::Loop\">Loop</a>&lt;S, T, D&gt; <span class=\"where fmt-newline\">where T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Item=<a class=\"enum\" href=\"tk_http/websocket/enum.Packet.html\" title=\"enum tk_http::websocket::Packet\">Packet</a>, Error=E&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tk_http/websocket/trait.Dispatcher.html\" title=\"trait tk_http::websocket::Dispatcher\">Dispatcher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a></span>","impl&lt;S, A&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a> for <a class=\"struct\" href=\"tk_http/websocket/client/struct.HandshakeProto.html\" title=\"struct tk_http::websocket::client::HandshakeProto\">HandshakeProto</a>&lt;S, A&gt; <span class=\"where fmt-newline\">where A: <a class=\"trait\" href=\"tk_http/websocket/client/trait.Authorizer.html\" title=\"trait tk_http::websocket::client::Authorizer\">Authorizer</a>&lt;S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
