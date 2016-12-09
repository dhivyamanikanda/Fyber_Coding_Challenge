package com.IMDb.app.frontend.common.data;

public class InputParameters {

    public enum ALLOWED_BROWSER{FIREFOX,CHROME,SAFARI,IEXPLORER}

    public boolean isValidBrowser(String browser) {
        for(InputParameters.ALLOWED_BROWSER browserItem: InputParameters.ALLOWED_BROWSER.values()) {
            if(browserItem.toString().equalsIgnoreCase(browser)) {
                return true;
            }
        }
        return false;
    }
}
