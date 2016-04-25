JavaEE - JVM
========================================================
author: 
date: 

Class loader
========================================================
When the JVM is started, three class loaders are used:
1. Bootstrap class loader
2. Extentions class loader
3. System class loader

References:
[Wiki - Java Classloader](http://en.wikipedia.org/wiki/Java_Classloader)
[Oracle - Understanding Extension Class Loading](http://docs.oracle.com/javase/tutorial/ext/basics/load.html)
[IBM - Classes and class loading](http://www.ibm.com/developerworks/java/library/j-dyn0429/)

Class loader
========================================================
The **bootstrap class loader** loads the core Java libraries(rt.jar, core.jar, etc.) located in the <JAVA_HOME>/jre/lib directory. This class loader, which is part of the core JVM, is written in native code.

This particular class loader has some special features. For one thing, it only loads classes found on the boot class path. Because these are trusted system classes, the bootstrap loader skips much of the validation that gets done for normal (untrusted) classes.

Class loader
========================================================
The **extensions class loader** load the code in the extensions directories <JAVA_HOME>/jre/lib/ext, or any other directory specified by the java.ext.dirs system property.

It is implemented by the sun.misc.Launcher$ExtClassLoader class.

Class loader
========================================================
The **System class loader** loads classes found on general class path(CLASSPATH) including your *application classes*.

It is implemented by the sun.misc.Launcher$AppClassLoader class.

Class loader
========================================================
Applications can also define their *own class loaders* for special purposes (such as run-time reloading of classes). 

Such added classloaders are derived from the java.lang.ClassLoader class (possibly indirectly), which provides thecore support for building an internal class representation (a java.lang.Class instance) from anarray of bytes.

Class loader
========================================================
Each constructed class is in some sense "owned" by the class loader that loaded it.

Class loaders normally keep a map of the classes they've loaded, to be able to find one by name if it's requested again.

Each class loader also keeps a reference to a parent class loader, defining a tree of class loaders with the bootstrap loader at the root.

Class loader
========================================================
When an instance of a particular class (identified by name)is needed, whichever class loader initially handles the request normally checks with its parentclass loader first before trying to load the class directly. This applies recursively if there are multiplelayers of class loaders, so it means that a class will normally be visible not only within the classloader that loaded it, but also to all descendant class loaders. It also means that if a class can beloaded by more than one class loader in a chain, the one furthest up the tree will be the one thatactually loads it.

Class loader
========================================================
There are many circumstances where multiple application classloaders are used by Java programs.

One example is within the J2EE framework.

"cafe babe"
========================================================
Every binary .class file starts with this four byte!!!

Binary names
========================================================
NOTHING



