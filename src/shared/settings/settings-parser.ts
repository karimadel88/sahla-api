import { GenericObject } from "@mongez/reinforcements";
import { Upload } from "@warlock.js/core";
import { settingsModels } from "./utils/flags";

/**
 * Settings parser object
 */
export const settingsParser = {
  /**
   * Parses the given data and returns the parsed value.
   *
   * @param {any} data - The data to be parsed.
   */
  async parse(data: any) {
    if (data.type === "file") {
      return await settingsParser.parseFile(data.value);
    }

    if (data.type === "boolean") {
      return settingsParser.boolean(data.value);
    }

    const modelParser = settingsParser.model(data);

    if (modelParser.isModel) {
      return await modelParser.parse();
    }

    return data.value;
  },

  /**
   * Retrieves the embedded data from an uploaded file with the given hash.
   * @param {string} hash - The hash of the uploaded file.
   */
  async parseFile(hash: string) {
    const upload = await Upload.findBy("hash", hash);
    if (upload) {
      return upload.embeddedData;
    }
    return null;
  },

  /**
   * Returns a boolean value based on the input value.
   *
   * @param {boolean | string | number} value - The value to be evaluated.
   */
  boolean(value: boolean | string | number): boolean {
    return ["false", false, 0].includes(value) ? false : Boolean(value);
  },

  /**
   * Generates a model based on the provided data.
   *
   * @param {GenericObject} data - The data used to generate the model. It should contain the group, key, and value properties.
   */
  model(data: GenericObject) {
    const Model = (settingsModels as any)[`${data.group}.${data.key}`];

    return {
      isModel: Model !== undefined,
      parse: async () => {
        const id = Number(data.value);
        return (await Model.find(id))?.embeddedData;
      },
    };
  },
};
