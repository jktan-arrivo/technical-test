Flutter Interview
1) What are keys in Flutter and when to use it?

Flutter commonly uses keys when it needs to uniquely identify specific widgets within a collection. Using keys also helps Flutter preserve the state of StatefulWidget s while they're being replaced with other widgets or just moved in the widget tree.

Keys in Flutter are used as an identifier for Widgets, Elements and SemanticsNodes. We can use it when a new widget tries to update an existing element; then, its key should be the same as the current widget key associated with the element. Keys should not be different amongst the Elements within the same parent.The subclasses of Key must be a GlobalKey or LocalKey. Keys are useful when we try to manipulate (such as adding, removing, or reordering) a collection of widgets of the same type that hold some state.

2) What is BuildContext?
BuildContext in Flutter is the part of the widgets in the Element tree so that each widget has its own BuildContext. We mainly use it to get a reference to another widget or theme. For example, if we want to use a material design element, it is required to reference it to the scaffold. We can get it using the Scaffold.of(context) method.

3) When should you use WidgetsBindingObserver? 
WidgetsBindingObserver should be used when we want to listen to the AppLifecycleState and call stop/start on our services.

4) What is Fat Arrow Notation in Dart and when do you use it? 
The fat arrow syntax is simply a short hand for returning an expression and is similar to (){ return expression; }.

The fat arrow is for returning a single line, braces are for returning a code block.

Only an expression—not a statement—can appear between the arrow (=>) and the semicolon (;). For example, you can’t put an if statement there, but you can use a conditional expression

5) What are Streams in Flutter/Dart?

Streams provide an asynchronous sequence of data. Data sequences include user-generated events and data read from files. You can process a stream using either await for or listen() from the Stream API. Streams provide a way to respond to errors. There are two kinds of streams: single subscription or broadcast.

6) Can you talk about Single subscription streams & Broadcast streams

The most common kind of stream contains a sequence of events that are parts of a larger whole. Events need to be delivered in the correct order and without missing any of them. This is the kind of stream you get when you read a file or receive a web request. Such a stream can only be listened to once. Listening again later could mean missing out on initial events, and then the rest of the stream makes no sense. When you start listening, the data will be fetched and provided in chunks.

Single subscription streams

The most common kind of stream contains a sequence of events that are parts of a larger whole. Events need to be delivered in the correct order and without missing any of them. This is the kind of stream you get when you read a file or receive a web request. Such a stream can only be listened to once. Listening again later could mean missing out on initial events, and then the rest of the stream makes no sense. When you start listening, the data will be fetched and provided in chunks.

Broadcast streams

The other kind of stream is intended for individual messages that can be handled one at a time. This kind of stream can be used for mouse events in a browser, for example. You can start listening to such a stream at any time, and you get the events that are fired while you listen. More than one listener can listen at the same time, and you can listen again later after canceling a previous subscription.

7) What is the purpose of SafeArea in Flutter?

A widget that insets its child by sufficient padding to avoid intrusions by the operating system. For example, this will indent the child by enough to avoid the status bar at the top of the screen.

8) What's the difference between async and async* in Dart?

Marking a function as async or async* allows it to use the async/await for a Future.

The difference between both is that async* will always return a Stream and offer some syntactical sugar to emit a value through the yield keyword.

We can therefore do the following:

Stream<int> foo() async* {
	for (int i = 0; i < 42; i++) {
	await Future.delayed(const Duration	(seconds: 1));
		yield i;
		}
	}
This function emits a value every second, which increments every time.

9) Explain async, await in Flutter/Dart? 

10) What are Null-aware operators?

11) What is the differences between final and const

12) What is the difference between CustomScrollView and ListView

13) isolate

14) 单线程