export interface ICallsResults {
  id: number;
  partnership_id: string;
  partner_data: {
    id: string;
    name: string;
    phone: string;
  };
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: 'Дозвонился' | 'Не дозвонился';
  record: string;
  line_number: string;
  in_out: 0 | 1;
  from_site: 0 | 1;
  source: string;
  errors: string[];
  disconnect_reason: string;
  results: [];
  stages: unknown[];
  abuse: {
    date: string;
    person_name: string;
    message: string;
    support_read_status: number;
    support_answer_status: number;
    answers: unknown[];
  };
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
  audio_url?: string;
}

export interface ICalls {
  total_rows: string;
  results: ICallsResults[];
}
