export interface RuffleConfig {
    publicPath?: string;
    polyfills?: boolean;
    allowScriptAccess?: boolean;
    autoplay?: "auto" | "on" | "off" | (string & {});
    unmuteOverlay?: "visible" | "hidden" | (string & {});
    backgroundColor?: string;
    wmode?: "opaque" | "transparent" | (string & {});
    letterbox?: "fullscreen" | "off" | "on" | (string & {});
    warnOnUnsupportedContent?: boolean;
    contextMenu?: "on" | "rightClickOnly" | "off" | (string & {});
    showSwfDownload?: boolean;
    upgradeToHttps?: boolean;
    maxExecutionDuration?: number;
    logLevel?: "error" | "warn" | "info" | "debug" | "trace" | (string & {});
    base?: string;
    menu?: boolean;
    salign?: string;
    forceAlign?: boolean;
    scale?: "showAll" | "noborder" | "exactfit" | "noscale" | (string & {});
    forceScale?: boolean;
    frameRate?: number;
    quality?: "low" | "medium" | "high" | "best" | (string & {});
    playerVersion?: number;
    splashScreen?: boolean;
    preferredRenderer?: "wgpu-webgl" | "webgpu" | "webgl" | "canvas" | (string & {});
    openUrlMode?: "allow" | "confirm" | "deny" | (string & {});
    allowNetworking?: string;
    favorFlash?: boolean;
    socketProxy?: Array<{
        host: string,
        port: number,
        proxyUrl: string,
    }>;
    fontSources?: string[];
    defaultFonts?: {
        sans?: string[],
        serif?: string[],
        typewriter?: string[],
    };
    credentialAllowList?: string[];
    playerRuntime?: "flashPlayer" | "air" | (string & {});
    allowFullscreen?: boolean;
}
