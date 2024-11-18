type FormDataValues = { [key: string]: any };

export const createFormDataFromValues = (values: FormDataValues): FormData => {
      const formData = new FormData();

      Object.keys(values).forEach((key) => {
            const value = values[key];
            console.log(key, value);
            if (Array.isArray(value)) {
                  value.forEach((item) => {
                        formData.append(key, item);
                  });
            } else {
                  formData.append(key, value);
            }
      });

      return formData;
};
