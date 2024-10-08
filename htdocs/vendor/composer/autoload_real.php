<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit9883f9f7ccd37a181d64a7cf7a9b4f80
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit9883f9f7ccd37a181d64a7cf7a9b4f80', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit9883f9f7ccd37a181d64a7cf7a9b4f80', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit9883f9f7ccd37a181d64a7cf7a9b4f80::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
