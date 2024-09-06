const astroConfig = {"base":"/","root":"file:///Users/kthrob/Repos/PurpleMartin/rikoshea/","srcDir":"file:///Users/kthrob/Repos/PurpleMartin/rikoshea/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/kthrob/Repos/PurpleMartin/rikoshea/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
