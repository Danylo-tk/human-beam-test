import { useRef } from 'react';
import Button from '../Button';

const ACCEPTED_FORMATS = '.png,.jpeg,.jpg,.heic,.gif';
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

type OrganisationIconUploadType = {
  preview: string | null;
  onChange: (file: File, preview: string) => void;
  onDelete: () => void;
};

const OrganisationIconUpload = ({ preview, onChange, onDelete }: OrganisationIconUploadType) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_SIZE) {
      alert('File size must be under 5MB');
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    onChange(file, previewUrl);

    // reset so same file can be re-uploaded
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleDelete = () => {
    if (preview) URL.revokeObjectURL(preview);
    onDelete();
  };

  return (
    <div className="flex gap-2">
      <div className="bg-blue-b3/50 h-18 w-18 overflow-hidden rounded-md">
        {preview && <img src={preview} alt="Organisation icon" className="h-full w-full object-cover" />}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button variant="outlined" onClick={() => inputRef.current?.click()}>
            Upload
          </Button>
          <Button disabled={!preview} variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        </div>

        <div className="text-gray-g3 text-xs">
          <p>File type: .png, .jpeg, .heic, .gif</p>
          <p>Max file size: 5MB</p>
        </div>
      </div>

      <input ref={inputRef} type="file" accept={ACCEPTED_FORMATS} className="hidden" onChange={handleChange} />
    </div>
  );
};

export default OrganisationIconUpload;
