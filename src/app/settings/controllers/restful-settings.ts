import { Restful, RouteResource } from "@warlock.js/core";
import { Setting } from "./../models/setting";
import { settingsRepository } from "./../repositories/settings-repository";

class RestfulSettings extends Restful<Setting> implements RouteResource {
  /**
   * {@inheritDoc}
   */
  protected repository = settingsRepository;

  /**
   * {@inheritDoc}
   */
  public validation: RouteResource["validation"] = {
    all: {
      rules: {},
    },
  };
}

const restfulSettings = new RestfulSettings();
export default restfulSettings;
